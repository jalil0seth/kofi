interface DescriptionProps {
  text: string;
  credits: string;
}

export function Description({ text, credits }: DescriptionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Description</h3>
      <p className="text-muted-foreground">{text}</p>
      <p className="text-muted-foreground">{credits}</p>
    </div>
  );
}