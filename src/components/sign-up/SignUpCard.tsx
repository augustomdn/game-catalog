import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpCard() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="flex flex-col items-center justify-center gap-4">
                    <h1 className="font-honk uppercase text-3xl">Jogopédia</h1>
                    <h2>Cadastre-se</h2>
                </CardTitle>
                <CardDescription hidden={true}>
                    Digite seu email abaixo para efetuar o login
                </CardDescription>
                <CardAction hidden={true}>
                    <Button variant="link">Sign Up</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Senha</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                   Esqueceu sua senha?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Cadastrar-se
                </Button>
                <Button variant="outline" className="w-full">
                    Login com Google
                </Button>
            </CardFooter>
        </Card>
    )
}
