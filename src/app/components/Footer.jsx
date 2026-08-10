import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/mostaquenaim', icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mostaque-naim-b114571b1/', icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://codeforces.com/profile/n4im', icon: FaCode, label: 'Codeforces' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-foreground font-semibold">
              mostaque<span className="text-accent">.</span>naim
            </p>
            <p className="text-sm text-muted mt-1">Senior Software Developer</p>
          </div>

          <div className="flex gap-5">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-muted mt-8">
          &copy; {new Date().getFullYear()} Mostaque Naim. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
