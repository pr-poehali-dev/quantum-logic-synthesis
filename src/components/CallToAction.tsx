export default function CallToAction() {
  return (
    <div className="relative overflow-hidden">
      <img
        src="https://cdn.poehali.dev/projects/0edc93a9-a362-4163-a11b-cd7f04ba5540/files/8f7029b3-ebfa-4771-b1ea-16c5cce0ed5c.jpg"
        alt="Путь в Испании"
        className="w-full h-[70vh] object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-16 px-6">
        <div className="max-w-3xl text-center">
          <p className="text-white text-2xl md:text-4xl font-bold leading-snug mb-6">
            Если ты хочешь бросить себе вызов и выйти на новый уровень мышления, в котором тебя ждёт{" "}
            <span className="italic text-neutral-300">новый уровень жизни</span> — напиши мне лично.
          </p>
          <p className="text-neutral-300 text-lg md:text-xl">
            Я расскажу, как ретрит поможет тебе именно в твоей ситуации.
          </p>
        </div>
      </div>
    </div>
  );
}
