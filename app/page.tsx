export default function TVBoxSalesPage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "var(--color-background)" }}
    >
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <span className="icon icon-play"></span>
              </div>
              <span className="logo-text">Monkey DunaTv</span>
            </div>
            <nav className="nav">
              <a href="#recursos" className="nav-link">
                Recursos
              </a>
              <a href="#planos" className="nav-link">
                Planos
              </a>
              <a href="#depoimentos" className="nav-link">
                Depoimentos
              </a>
              <button className="btn btn-outline btn-sm">Entrar</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="badge">
              🔥 O melhor do mercado! - Preços promocionais!
            </span>
            <h1 className="hero-title">
              Entretenimento <span className="text-primary">Ilimitado</span> na
              Sua TV
            </h1>
            <p className="hero-subtitle">
              Acesse centenas de canais, filmes e séries em alta definição.
              Transforme sua TV comum em uma Smart TV completa.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg">
                Testar gratis por 7 dias (CELULAR)
              </button>
              <button className="btn btn-outline btn-lg">
                Testar gratis por 7 dias (PC)
              </button>
            </div>
            <div className="hero-image">
              <img
                src="/modern-tv-box.png"
                alt="TV BOX Premium com controle remoto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="features">
        <div className="container">
          <div className="features-header">
            <h2 className="features-title">Por que escolher nosso TV BOX?</h2>
            <p className="features-subtitle">
              Tecnologia de ponta para uma experiência de entretenimento
              incomparável
            </p>
          </div>

          <div className="features-grid">
            <div className="card">
              <div className="card-icon">
                <span className="icon icon-zap"></span>
              </div>
              <h3 className="card-title">Ultra Rápido</h3>
              <p className="card-description">
                Processador quad-core e 4GB de RAM para streaming sem
                travamentos
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <span className="icon icon-shield"></span>
              </div>
              <h3 className="card-title">100% Seguro</h3>
              <p className="card-description">
                Conexão criptografada e atualizações automáticas de segurança
              </p>
            </div>

            <div className="card">
              <div className="card-icon">
                <span className="icon icon-users"></span>
              </div>
              <h3 className="card-title">Suporte 24/7</h3>
              <p className="card-description">
                Equipe especializada disponível para ajudar quando precisar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits-grid">
            <div>
              <h2 className="benefits-title">
                Tudo que você precisa em um só lugar
              </h2>
              <div className="benefits-list">
                {[
                  "Mais de 300 canais e 5.000 filmes e séries",
                  "Netflix, Prime Video, Disney+ integrados",
                  "Filmes e séries em 4K Ultra HD",
                  "Acesse em até duas telas",
                ].map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <span className="benefit-icon icon icon-check"></span>
                    <span className="benefit-text">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits-image">
              <img
                src="/family-watching-tv.png"
                alt="Família assistindo TV com interface do TV BOX"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="pricing">
        <div className="container">
          <div className="pricing-header">
            <h2 className="pricing-title">
              Oferta Especial por Tempo Limitado
            </h2>
            <p className="pricing-subtitle">
              Aproveite 17% de desconto e transforme sua TV hoje mesmo
            </p>
          </div>

          <div className="pricing-card">
            <span className="pricing-badge">MAIS POPULAR</span>
            <h3 className="pricing-name">Plano Mensal</h3>
            <div className="pricing-price">
              <span className="price-old">R$ 34,99</span>
              <span className="price-new">R$ 28,90</span>
            </div>
            <p className="pricing-period">Pagamento único</p>
            <div className="pricing-features">
              {[
                "TV BOX 4K Ultra HD",
                "Configuração gratuita",
                "Suporte vitalício",
                "Garantia de 2 anos",
              ].map((feature, index) => (
                <div key={index} className="pricing-feature">
                  <span
                    className="icon icon-check"
                    style={{ color: "var(--color-primary)" }}
                  ></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="btn btn-primary btn-lg w-full">
              Comprar Agora - R$ 28,90
            </button>
            <p className="pricing-guarantee">✅ 7 Dias de teste gratis.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">O que nossos clientes dizem</h2>
            <p className="testimonials-subtitle">
              Mais de 50.000 famílias já transformaram sua experiência de TV
            </p>
          </div>

          <div className="testimonials-grid">
            {[
              {
                name: "Maria Silva",
                location: "São Paulo, SP",
                rating: 5,
                comment:
                  "Incrível! Agora tenho acesso a todos os canais que queria. A qualidade é excelente e a instalação foi super fácil.",
              },
              {
                name: "João Santos",
                location: "Rio de Janeiro, RJ",
                rating: 5,
                comment:
                  "Melhor investimento que fiz. Minha família toda adora. Filmes, séries, esportes... tudo em um lugar só!",
              },
              {
                name: "Ana Costa",
                location: "Belo Horizonte, MG",
                rating: 5,
                comment:
                  "Suporte excelente e produto de qualidade. Recomendo para todos que querem economizar na TV por assinatura.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star icon icon-star"></span>
                  ))}
                </div>
                <h4 className="testimonial-name">{testimonial.name}</h4>
                <p className="testimonial-location">{testimonial.location}</p>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2 className="cta-title">Não perca esta oportunidade única!</h2>
          <p className="cta-subtitle">
            Transforme sua TV comum em uma Smart TV completa.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-secondary btn-lg">
              Comprar Agora - R$ 28,90
            </button>
            <button className="btn btn-cta-outline btn-lg">
              Falar no WhatsApp
            </button>
          </div>
          <p className="cta-info">
            🚚 Entrega Imediata | 💳 Parcelamos em até 3x
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="logo-icon">
                  <span className="icon icon-play"></span>
                </div>
                <span className="footer-brand-text">TV BOX Premium</span>
              </div>
              <p className="footer-description">
                Transformando TVs comuns em Smart TVs desde 2020.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Produto</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Especificações
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Garantia
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Suporte</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Email
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Empresa</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TV BOX Premium. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
