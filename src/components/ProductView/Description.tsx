interface DescriptionProps {
  text: string;
  credits: string;
}

export function Description({ text, credits }: DescriptionProps) {
  return (
    <div className="space-y-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900">Description</h3>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p className="text-base">{text}</p>
        <p className="text-sm italic">{credits}</p>
      </div>
    </div>
  );
}