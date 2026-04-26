import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_ITEMS = [
  { label: "Главная", section: "hero" },
  { label: "О проекте", section: "about" },
  { label: "Контакты", section: "contacts" },
];

const SOCIAL_LINKS = [
  {
    name: "Тех. поддержка",
    icon: "Headphones",
    handle: "vk.com/id847666543",
    desc: "Написать в поддержку",
    href: "https://vk.com/id847666543",
    color: "from-[#4c75a3] to-[#3b5c8a]",
    glow: "rgba(76,117,163,0.4)",
  },
  {
    name: "Сообщество VK",
    icon: "Users",
    handle: "Вступить в группу",
    desc: "Новости и обновления",
    href: "https://vk.me/join/TStXhGDz9hi3NEq6/bAaVrTt0povudv68EM=",
    color: "from-[#6a9fd8] to-[#4c75a3]",
    glow: "rgba(106,159,216,0.4)",
  },
  {
    name: "Telegram-канал",
    icon: "Send",
    handle: "@rongetusslaapk",
    desc: "Вступить и скачать игру",
    href: "https://t.me/rongetusslaapk",
    color: "from-[#2aabee] to-[#1a8bc7]",
    glow: "rgba(42,171,238,0.4)",
  },
];

const FEATURES = [
  {
    icon: "Zap",
    title: "Мгновенный ответ",
    desc: "Бот отвечает в течение секунды — без ожидания и задержек",
  },
  {
    icon: "Shield",
    title: "Надёжность",
    desc: "Работает 24/7 без перебоев, всегда на связи",
  },
  {
    icon: "Sparkles",
    title: "Умный помощник",
    desc: "Понимает контекст и даёт точные ответы на ваши вопросы",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["contacts", "about", "hero"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background grid-bg relative overflow-x-hidden">
      {/* Ambient blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-0 w-64 h-64 rounded-full bg-pink-500/6 blur-3xl pointer-events-none" />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-card border-b border-white/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center animate-pulse-glow">
              <Icon name="Bot" size={16} className="text-white" />
            </div>
            <span className="font-montserrat font-black text-lg gradient-text">
              RONGE RUSSIA
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollTo(item.section)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.section
                    ? "text-purple-400 bg-purple-500/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contacts")}
              className="ml-3 px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-semibold font-montserrat hover:opacity-90 transition-opacity"
            >
              Написать боту
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass-card border-t border-white/10 px-6 py-4 flex flex-col gap-2 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollTo(item.section)}
                className="text-left px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center relative"
      >
        <div className="animate-float mb-8">
          <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-cyan-400 flex items-center justify-center mx-auto shadow-2xl animate-pulse-glow">
            <Icon name="Bot" size={56} className="text-white" />
          </div>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium mb-6 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Бот онлайн и готов к работе
          </div>

          <h1 className="font-montserrat font-black text-5xl md:text-7xl leading-tight mb-6 animate-slide-up-delay-1">
            Ваш умный{" "}
            <span className="gradient-text">помощник</span>
            <br />в одном боте
          </h1>

          <p className="text-foreground/60 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto animate-slide-up-delay-2">
            Быстрые ответы, полезные функции и всё, что нужно — прямо в мессенджере. Без лишних шагов.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-3">
            <button
              onClick={() => scrollTo("contacts")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-montserrat font-bold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25"
            >
              Запустить бота
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="px-8 py-4 rounded-xl border border-white/15 text-foreground/80 font-medium text-base hover:bg-white/5 hover:border-white/25 transition-all duration-200"
            >
              Узнать больше
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/30 animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-sm font-semibold font-montserrat uppercase tracking-widest">
              О проекте
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mt-3 mb-5">
              Почему выбирают{" "}
              <span className="gradient-text">нас</span>
            </h2>
            <p className="text-foreground/50 text-lg max-w-xl mx-auto">
              Мы создали бота, который экономит время и делает жизнь проще — для людей, которые ценят качество
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-2xl p-7 group hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/30 to-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={f.icon as "Zap"} size={22} className="text-purple-400" />
                </div>
                <h3 className="font-montserrat font-bold text-lg mb-2 text-foreground">
                  {f.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "10K+", label: "Пользователей" },
              { value: "99.9%", label: "Время работы" },
              { value: "<1с", label: "Время ответа" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-montserrat font-black text-3xl md:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-foreground/40 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-cyan-400 text-sm font-semibold font-montserrat uppercase tracking-widest">
              Мы везде
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mt-3">
              Быстрые{" "}
              <span className="neon-text-cyan">ссылки</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="glass-card rounded-2xl p-6 group hover:scale-105 transition-all duration-300 cursor-pointer block"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${s.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = s.glow.replace("0.4", "0.5");
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                  (e.currentTarget as HTMLElement).style.borderColor = "";
                }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={s.icon as "Send"} size={22} className="text-white" />
                </div>
                <div className="font-montserrat font-bold text-base text-foreground mb-1">
                  {s.name}
                </div>
                <div className="text-foreground/40 text-xs mb-2">{s.handle}</div>
                <div className="text-foreground/60 text-sm">{s.desc}</div>
                <div className="mt-4 flex items-center gap-1 text-xs text-foreground/40 group-hover:text-foreground/70 transition-colors">
                  Перейти <Icon name="ArrowRight" size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-pink-400 text-sm font-semibold font-montserrat uppercase tracking-widest">
              Контакты
            </span>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mt-3 mb-4">
              Свяжитесь{" "}
              <span className="gradient-text">с нами</span>
            </h2>
            <p className="text-foreground/50">
              Есть вопросы? Напишите нам — ответим быстро
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10 border border-purple-500/20">
            <div className="space-y-4">
              {[
                { icon: "Users", label: "Тех. поддержка VK", value: "vk.com/id847666543", href: "https://vk.com/id847666543" },
                { icon: "Mail", label: "Email", value: "Udidj759@yandex.ru", href: "mailto:Udidj759@yandex.ru" },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/30 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={contact.icon as "Send"} size={18} className="text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-foreground/40 text-xs mb-0.5">{contact.label}</div>
                    <div className="text-foreground font-medium">{contact.value}</div>
                  </div>
                  <Icon name="ChevronRight" size={16} className="text-foreground/30 group-hover:text-purple-400 transition-colors" />
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/8">
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-montserrat font-bold text-base hover:opacity-90 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-purple-500/25">
                Написать боту прямо сейчас
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-foreground/30 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
              <Icon name="Bot" size={11} className="text-white" />
            </div>
            <span>RONGE RUSSIA © 2024</span>
          </div>
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollTo(item.section)}
                className="hover:text-foreground/70 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}