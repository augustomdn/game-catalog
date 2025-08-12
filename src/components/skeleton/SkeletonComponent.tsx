import { Skeleton } from "../ui/skeleton";

interface SkeletonProps {
    className?: string;
}

export default function SkeletonComponent({ className }: SkeletonProps) {
    return (
        <>
            <Skeleton
                className={className}
            />
        </>
    );
}