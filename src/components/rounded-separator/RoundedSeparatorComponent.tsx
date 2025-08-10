export default function RoundedSeparatorComponent() {
    return (
        <div className="w-full h-10 dark:radial-gradient(50%_500%_at_50%_-420%,rgba(64,97,231,0.4)_80%,rgba(0,0,0,0.1)_100%),black] bg-[radial-gradient(50%_500%_at_50%_-420%,rgba(64,97,231,0.2)_60%,rgba(255,255,255,0.05)_100%),white" style={{
            // background: `radial-gradient(
            //         50% 500% at 50% -420%,
            //         rgba(64, 97, 231, 0.4) 80%,
            //         rgba(0, 0, 0, 0.1) 100%
            //     ),black`
        }}>
            <div
                className="absolute w-full h-1 border-t rounded-tl-[70%] rounded-tr-[70%]"
                style={{
                    background: `linear-gradient(
                    to right,
                    rgba(33, 13, 22, 1) 16%,
                    rgba(184, 40, 105, 1),
                    rgba(229, 9, 20, 1),
                    rgba(184, 40, 105, 1),
                    rgba(33, 13, 22, 1) 84%
                    )`
                }}
            >

            </div>
        </div>

    )
}