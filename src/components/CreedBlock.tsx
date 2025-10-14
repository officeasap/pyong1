export default function CreedBlock() {
  return (
    <div className="w-full mt-16 py-12 bg-card/50 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto paper-twist rounded-[16px] border border-border bg-card p-8 space-y-6">
          <div className="creed-en animate-zoom-blink-out text-center">
            <p className="text-foreground text-base leading-relaxed">
              The Note That Made Counterfeit Obsolete. Supernote is not a replica. It's a resurrection.
            </p>
          </div>
          
          <div className="creed-ko animate-zoom-blink-in text-center">
            <p className="font-bold leading-relaxed" style={{ color: '#77d96a' }}>
              위조가 아니라 부활이다
            </p>
            <p className="text-sm mt-2" style={{ color: '#77d96a' }}>
              슈퍼노트는 복제품이 아닙니다. 재건입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
