import Link from "next/link"


const footerOptions = [
    { label: 'Perguntas frequentes', href: '/' },
    { label: 'Entre em contato', href: '/' },
    { label: 'Central de ajuda', href: '/' },
    { label: 'Siga-me no Linkedin', href: 'https://www.linkedin.com/in/augusto-meireles-nascimento/' },
    { label: 'Siga-me no Github', href: 'https://github.com/augustomdn' },

]

export default function Footer() {
    return (
        <footer className="p-8 bg-card border-t lg:px-40">
            <div className="py-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {footerOptions.map((item, index) => (
                    <Link href={item.href} key={index} target="_blank">
                        <span className="text-muted-foreground underline">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>
            <div className="pt-8">
                <p className="text-muted-foreground text-center">
                    © Augusto Nascimento
                </p>
            </div>
        </footer>

    )
}