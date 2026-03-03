import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'appearance-none inline-flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-120 rounded-full font-[inherit] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border border-white/12 bg-white/4 text-white/90 hover:-translate-y-px hover:border-white/20 hover:bg-white/6',
        accent:
          'border border-[rgba(124,92,255,0.45)] bg-[rgba(124,92,255,0.14)] text-white/90 hover:-translate-y-px hover:border-white/20 hover:bg-white/6',
        ghost:
          'border border-transparent text-white/72 hover:border-white/10 hover:bg-white/3',
      },
      size: {
        default: 'px-3 py-2.5 text-[13px]',
        sm: 'px-2.5 py-2 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button };
