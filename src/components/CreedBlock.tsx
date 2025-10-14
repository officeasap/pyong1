export default function CreedBlock() {
  return (
    <div className="w-full mt-16 py-12 bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto paper-twist rounded-[16px] border border-border bg-card p-8 space-y-6">
          <div className="creed-en animate-zoom-blink-out text-center">
            <p className="text-foreground text-base leading-relaxed">
              You order. We deliver. No apologies.
            </p>
          </div>
          
          <div className="creed-ko animate-zoom-blink-in text-center">
            <p className="font-bold leading-relaxed" style={{ color: '#77d96a' }}>
              당신이 명령합니다. 우리는 수행합니다. 사과는 없습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
