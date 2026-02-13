import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { CHATBOT_SYSTEM_PROMPT, OPENAI_CONFIG, FALLBACK_RESPONSES } from "@/data/chatbot-knowledge";
import fotoPerfil from "../assets/foto_perfil.png";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Función para enviar mensaje a la API de IA
  const sendMessageToAPI = async (userMessage: string): Promise<string> => {
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      if (!apiKey) {
        console.warn("API Key no configurada, usando respuestas de fallback");
        throw new Error("API Key no encontrada");
      }

      // Optimización de tokens: usar configuración centralizada
      const recentMessages = messages
        .filter(m => m.id !== "1")
        .slice(-OPENAI_CONFIG.maxHistoryMessages)
        .map(m => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text
        }));

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: OPENAI_CONFIG.model,
          messages: [
            {
              role: "system",
              content: CHATBOT_SYSTEM_PROMPT
            },
            ...recentMessages,
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: OPENAI_CONFIG.maxTokens,
          temperature: OPENAI_CONFIG.temperature,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Error de OpenAI:", errorData);
        throw new Error(`Error de API: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || "Lo siento, no pude procesar tu solicitud.";
    } catch (error) {
      console.error("Error al comunicarse con la API:", error);
      
      // Respuestas de fallback inteligentes usando la base de conocimiento
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("precio") || lowerMessage.includes("costo") || lowerMessage.includes("cuanto")) {
        return FALLBACK_RESPONSES.precio;
      } else if (lowerMessage.includes("servicio") || lowerMessage.includes("ofrec")) {
        return FALLBACK_RESPONSES.servicio;
      } else if (lowerMessage.includes("contacto") || lowerMessage.includes("email") || lowerMessage.includes("whatsapp")) {
        return FALLBACK_RESPONSES.contacto;
      } else if (lowerMessage.includes("tecnolog") || lowerMessage.includes("herramienta") || lowerMessage.includes("stack")) {
        return FALLBACK_RESPONSES.tecnologias;
      } else if (lowerMessage.includes("experiencia") || lowerMessage.includes("quien") || lowerMessage.includes("eres")) {
        return FALLBACK_RESPONSES.experiencia;
      }
      
      return FALLBACK_RESPONSES.default;
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular delay de escritura (opcional)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Obtener respuesta del bot
    const botResponse = await sendMessageToAPI(inputValue);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Botón flotante */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: -100 }}
            className="fixed bottom-6 left-6 z-50"
          >
            {/* Efecto de pulso */}
            <div className="absolute inset-0 rounded-3xl bg-primary animate-ping opacity-20"></div>
            
            <Button
              onClick={() => setIsOpen(true)}
              className="relative h-14 px-6 rounded-3xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 bg-gradient-to-r from-primary via-primary to-primary/90 hover:scale-105 group flex items-center gap-3"
            >
              <div className="relative">
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                {/* Badge de notificación */}
                <span className="absolute -top-2 -right-2 h-4 w-4 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
              </div>
              
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-bold leading-tight">¿Necesitas ayuda?</span>
                <span className="text-[11px] opacity-90 leading-tight">Chatea conmigo</span>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 left-6 z-50 w-[90vw] sm:w-96 h-[550px] bg-card border-2 border-primary/20 rounded-3xl shadow-2xl shadow-primary/10 flex flex-col overflow-hidden backdrop-blur-sm"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground p-5 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={fotoPerfil}
                    alt="Victor Sánchez"
                    className="h-12 w-12 rounded-full object-cover border-2 border-white/30 shadow-md"
                  />
                  {/* Indicador de estado online */}
                  <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-400 rounded-full border-2 border-primary animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-bold text-base">Victor Virtual</h3>
                  <p className="text-xs opacity-90 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 bg-green-400 rounded-full"></span>
                    En línea • 
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-white/20 rounded-full transition-all"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/10 to-muted/30">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  {message.sender === "user" ? (
                    <div className="h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 bg-primary text-primary-foreground">
                      <User className="h-4 w-4" />
                    </div>
                  ) : (
                    <img
                      src={fotoPerfil}
                      alt="Victor"
                      className="h-8 w-8 rounded-full object-cover flex-shrink-0 border border-border"
                    />
                  )}

                  {/* Mensaje */}
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <span className="text-xs opacity-60 mt-1 block">
                      {message.timestamp.toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Indicador de escritura */}
              {isTyping && (
                <div className="flex gap-2">
                  <img
                    src={fotoPerfil}
                    alt="Victor"
                    className="h-8 w-8 rounded-full object-cover flex-shrink-0 border border-border"
                  />
                  <div className="bg-card border border-border rounded-2xl px-4 py-2">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:0.1s]"></span>
                      <span className="w-2 h-2 bg-foreground rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-white shadow-inner">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-4 py-3 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white text-sm transition-all"
                />
                <Button
                  onClick={handleSendMessage}
                  size="icon"
                  disabled={!inputValue.trim() || isTyping}
                  className="rounded-full h-11 w-11 shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground text-center mt-2">Powered by Victor Dev</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
