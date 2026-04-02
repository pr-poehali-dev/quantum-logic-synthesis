export default function Featured() {
  const items = [
    { icon: "🎒", text: "Пройти 120 км с одним рюкзаком по дорогам Испании — памятник ЮНЕСКО" },
    { icon: "🌿", text: "Ощутить «Buen Camino» — приветствие каждого испанца на вашем пути" },
    { icon: "🧭", text: "Перезагрузиться и переосмыслить истинные ценности своей жизни" },
    { icon: "📵", text: "Информационный детокс: смартфон — только как фотоаппарат" },
    { icon: "🌍", text: "Познакомиться с единомышленниками из разных стран мира" },
    { icon: "🏰", text: "Погрузиться в мистическую Испанию ведьм, тореадоров и хамона" },
    { icon: "⚔️", text: "Пройти испытания: ранний подъём, мозоли, лотерея мест в Альберге" },
    { icon: "📜", text: "Получить персональный Compostela — сертификат паломника" },
  ];

  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/0edc93a9-a362-4163-a11b-cd7f04ba5540/files/84656eb7-463a-4017-90df-86d490021f66.jpg"
          alt="Паломник на Пути Сантьяго"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Быть Пилигримом — это</h3>
        <p className="text-2xl lg:text-3xl font-semibold text-neutral-900 leading-snug mb-8">
          Путь Святого Иакова — это пешее путешествие в 120 км по Испании от города Ферроль до города Сантьяго-де-Компостела с полным погружением в свою собственную аутентичность, выдерживая аскезы и достигая цели.
        </p>
        <ul className="space-y-3 mb-10">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-800 text-base lg:text-lg leading-snug">
              <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Записаться на путь
        </a>
      </div>
    </div>
  );
}