import Link from "next/link"


const footerOptions = [
    { label: 'Perguntas frequentes', href: '' },
    { label: 'Entre em contato', href: '' },
    { label: 'Central de ajuda', href: '' },
    { label: 'Siga-me no Linkedin', href: '' },
    { label: 'Siga-me no Github', href: '' },

]

export default function Footer() {
    return (
        <footer className="m-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:px-40">
                {footerOptions.map((item, index) => (
                    <Link href="/" key={index}>
                        <span className="text-muted-foreground underline">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="mt-8 border-t">
                <p className="p-4 text-muted-foreground text-center">
                    © Augusto Nascimento
                </p>
            </div>
        </footer>

    )
}