import Link from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href: string;
    className?: string;
}

const buttonClasses = cva('rounded-full inline-flex items-center', {
    variants: {
        variant: {
            primary: [
                'bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] ease-in',
                ' [&_.icon-wrapper]:ml-2',
            ],
            secondary: [
                'bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px]',
                'hover:bg-opacity-20 transition-colors ease-in',
                '[&_.icon-wrapper]:bg-transparent-white [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2  [&_.icon-wrapper]:-mr-2 [&_.icon-wrapper]:ml-2',
            ],
            tertiary: '',
        },
        size: {
            small: 'text-xs px-3 h-7',
            medium: 'text-sm px-4 h-8',
            large: 'text-md px-6 h-12',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium',
    },
});

export const Button = ({ children, href, variant, size, className }: ButtonProps) => {
    return (
        <Link className={classNames(buttonClasses({ variant, size }), className)} href={href}>
            {children}
        </Link>
    );
};
export const IconWrapper = ({ children }: { children: React.ReactNode }) => {
    return <span className="icon-wrapper">{children}</span>;
};
