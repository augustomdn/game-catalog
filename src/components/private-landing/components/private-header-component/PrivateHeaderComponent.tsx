import AvatarComponent from "@/components/avatar/AvatarComponent";
import { Button } from "@/components/ui/button";
import useSupabaseUser from "@/hooks/useSupabaseUser";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PrivateHeaderComponent() {
    const router = useRouter();
    const user = useSupabaseUser();

    if (!user) return null;

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert("Erro ao sair: " + error.message);
        } else {
            router.push("/");
        }
    };


    return (
        <header className="px-8 py-4 w-full flex justify-between items-center lg:px-40">
            <Link href="/">
                <span className="font-honk text-3xl uppercase">Jogopédia</span>
            </Link>

            <div className="flex gap-2">
                <AvatarComponent
                    name_abbr={user.name_abbr}
                    src={user.avatar_url}
                    alt="Avatar do usuário"
                />
                <Button variant="secondary" onClick={handleLogout}>
                    Sair
                </Button>
            </div>

        </header>
    )
}