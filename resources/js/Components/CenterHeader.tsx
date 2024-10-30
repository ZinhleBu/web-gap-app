export default function CenterHeader({ imageUrl, className }: { imageUrl: string, className?: string }) 
    {
    return (
        <img
            className="mx-auto h-80 w-auto rounded-full border-8 border-white"
            src={imageUrl}
            alt="Workflow"
           
        />
    );
}
