import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 active:scale-[0.97] hover:scale-[1.015] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_10%_50%,rgba(255,255,255,0.35),transparent_55%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:content-[''] after:absolute after:top-0 after:left-[-30%] after:h-full after:w-[30%] after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:skew-x-[-18deg] after:translate-x-0 hover:after:translate-x-[260%] after:transition-transform after:duration-1000 after:ease-out",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /** Mensaje dinámico para enviar en WhatsApp. Si se omite, se abre el chat sin texto prellenado */
  whatsappMessage?: string
  /** Número alternativo (solo dígitos). Por defecto usa el global configurado */
  whatsappNumber?: string
  /** Fuerza abrir WhatsApp aunque no se pase mensaje (uso explícito) */
  autoWhatsapp?: boolean
}

// Número de WhatsApp usado para redirección global
const WHATSAPP_NUMBER = "573013829208" // sin el signo + para el formato wa.me

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    onClick,
    whatsappMessage,
    whatsappNumber,
    autoWhatsapp,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Ejecuta cualquier lógica original primero
      if (onClick) {
        onClick(e)
      }
      // Si el componente pidió explícitamente ignorar el redirect, salir
      // Uso: <Button data-whatsapp-ignore />
      const target = e.currentTarget as HTMLElement & { dataset?: DOMStringMap }
      if (target?.dataset?.whatsappIgnore !== undefined) return
      // Si el evento fue prevenido por la lógica original, no continuar
      if (e.defaultPrevented) return
      // Nueva lógica: solo redirigir si se indicó explícitamente
      // Condiciones: props (whatsappMessage | whatsappNumber | autoWhatsapp) OR atributo data-whatsapp
      const explicitAttr = target?.dataset?.whatsapp !== undefined
      const wantsWhatsapp = !!(whatsappMessage || whatsappNumber || autoWhatsapp || explicitAttr)
      if (!wantsWhatsapp) return

      const number = (whatsappNumber || WHATSAPP_NUMBER).replace(/[^0-9]/g, "")
      let url = `https://wa.me/${number}`
      const trimmed = whatsappMessage?.trim()
      if (trimmed) {
        url += `?text=${encodeURIComponent(trimmed)}`
      }
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
