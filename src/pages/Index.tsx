import { Brain, Building2, Shield, Lightbulb, Sparkles, Users } from "lucide-react";
import { ArticleSection } from "@/components/ArticleSection";
import { TechCard } from "@/components/TechCard";
import { BlockquoteHighlight } from "@/components/BlockquoteHighlight";
import heroImage from "@/assets/hero-tech-innovation.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <img 
          src={heroImage} 
          alt="Tecnologia e Inovação" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Redesenhando a Relação entre{" "}
              <span className="gradient-text">Pessoas e Inovação</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Como a tecnologia — da inteligência artificial aos bancos digitais — está transformando nossa forma de viver, pensar e criar
            </p>
          </div>
        </div>
      </header>

      {/* Main Article Content */}
      <article className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* Introduction */}
        <div className="mb-20 animate-fade-in">
          <p className="text-xl leading-relaxed text-foreground/90 mb-6">
            Vivemos em uma era sem precedentes. Ferramentas que antes pareciam ficção científica — como assistentes inteligentes que conversam, compreendem e até criam — agora estão ao alcance de um clique. Ao mesmo tempo, serviços financeiros que exigiam filas e burocracias interminável agora cabem no bolso, acessíveis 24 horas por dia.
          </p>
          <p className="text-xl leading-relaxed text-foreground/90">
            A inteligência artificial generativa e os bancos digitais representam mais do que inovações tecnológicas: eles simbolizam uma mudança profunda na forma como nos relacionamos com o mundo digital e, consequentemente, com nossas próprias possibilidades.
          </p>
        </div>

        {/* AI Section */}
        <ArticleSection title="A Revolução da Inteligência Artificial Generativa">
          <p>
            Plataformas como ChatGPT e outras soluções desenvolvidas pela OpenAI democratizaram o acesso ao conhecimento de uma forma inédita. Hoje, qualquer pessoa pode dialogar com uma máquina que compreende contexto, gera textos, traduz idiomas, resume documentos complexos e até auxilia na criação de código e arte digital.
          </p>
          
          <BlockquoteHighlight>
            "A IA não apenas responde perguntas — ela nos ajuda a fazer as perguntas certas."
          </BlockquoteHighlight>

          <p>
            O que torna essa revolução tão significativa é a <strong>acessibilidade</strong>. Não é mais necessário ser especialista em tecnologia para aproveitar o poder da automação inteligente. Estudantes, empreendedores, profissionais liberais e criadores de conteúdo agora têm em mãos ferramentas que antes estavam restritas a grandes corporações.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <TechCard
              icon={<Brain className="w-10 h-10" />}
              title="Democratização do Conhecimento"
              description="A IA torna o aprendizado mais rápido e acessível, permitindo que pessoas de diferentes contextos acessem informação e educação de qualidade."
            />
            <TechCard
              icon={<Sparkles className="w-10 h-10" />}
              title="Criatividade Amplificada"
              description="Ferramentas generativas potencializam a criação artística, literária e técnica, funcionando como parceiras no processo criativo."
            />
          </div>

          <p>
            Contudo, essa transformação vem acompanhada de desafios. À medida que a IA se torna mais capaz, surgem questões urgentes sobre <strong>dependência tecnológica</strong>, <strong>viés algorítmico</strong> e o <strong>futuro do trabalho humano</strong>. Precisamos nos perguntar: estamos usando a tecnologia como extensão de nossas capacidades ou estamos nos tornando dependentes dela?
          </p>
        </ArticleSection>

        {/* Digital Banks Section */}
        <ArticleSection title="Bancos Digitais: Simplificação e Inclusão Financeira">
          <p>
            Nubank, Inter, C6 Bank — esses nomes representam uma revolução silenciosa no sistema financeiro brasileiro. O que antes exigia agências físicas, longas filas e processos burocráticos, agora acontece em minutos através de um aplicativo intuitivo e bem projetado.
          </p>

          <p>
            Os bancos digitais não apenas simplificaram o acesso a serviços financeiros: eles <strong>redesenharam a experiência do usuário</strong>. Interfaces limpas, processos transparentes, ausência de taxas abusivas e atendimento humanizado tornaram-se a norma, forçando o setor bancário tradicional a se reinventar.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <TechCard
              icon={<Building2 className="w-10 h-10" />}
              title="Inclusão Financeira"
              description="Milhões de brasileiros que antes estavam fora do sistema bancário agora têm acesso a crédito, investimentos e serviços financeiros."
            />
            <TechCard
              icon={<Users className="w-10 h-10" />}
              title="Experiência Centrada no Usuário"
              description="Design intuitivo e processos simplificados colocam as necessidades do cliente em primeiro lugar, criando relações mais transparentes."
            />
          </div>

          <p>
            Essa transformação também levanta questões sobre segurança de dados, privacidade e a concentração de informações sensíveis em plataformas digitais. O usuário moderno precisa estar consciente de seus direitos e dos riscos envolvidos no uso intensivo de serviços digitais.
          </p>
        </ArticleSection>

        {/* Ethics and Impact */}
        <ArticleSection title="Impactos Éticos e Sociais: Luzes e Sombras">
          <p>
            Toda inovação carrega em si tanto promessas quanto perigos. A tecnologia que nos conecta também nos expõe; a automação que economiza tempo também ameaça empregos; os algoritmos que personalizam experiências também podem reforçar bolhas e preconceitos.
          </p>

          <BlockquoteHighlight>
            "A tecnologia é neutra, mas nunca é isenta de valores. Ela reflete as escolhas de quem a cria e de quem a utiliza."
          </BlockquoteHighlight>

          <div className="space-y-6 my-8">
            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Dependência Tecnológica
              </h4>
              <p className="text-muted-foreground">
                Quanto mais delegamos tarefas a sistemas automatizados, mais corremos o risco de perder habilidades críticas. É fundamental manter o equilíbrio entre conveniência e autonomia intelectual.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Substituição de Empregos
              </h4>
              <p className="text-muted-foreground">
                A automação está redefinindo o mercado de trabalho. Enquanto algumas funções desaparecem, novas oportunidades surgem — mas exigem adaptação, requalificação e políticas públicas eficazes.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-lg p-6 shadow-soft">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Uso Consciente de Dados
              </h4>
              <p className="text-muted-foreground">
                Nossos dados alimentam algoritmos que moldam desde recomendações de conteúdo até decisões de crédito. Entender como essas informações são usadas é essencial para exercer cidadania digital.
              </p>
            </div>
          </div>

          <p>
            O desafio está em garantir que a tecnologia sirva ao bem comum, respeitando a dignidade humana, a privacidade e a equidade. Isso exige regulação inteligente, transparência das empresas e educação digital da população.
          </p>
        </ArticleSection>

        {/* Design and Usability */}
        <ArticleSection title="O Papel do Design e da Usabilidade">
          <p>
            Por trás de toda grande inovação tecnológica está um design bem pensado. A inteligência artificial só é útil se for acessível; os bancos digitais só conquistam usuários porque são intuitivos.
          </p>

          <p>
            O <strong>design de experiência</strong> deixou de ser um detalhe estético para se tornar o coração da transformação digital. Interfaces bem projetadas reduzem barreiras, democratizam o acesso e tornam a tecnologia menos intimidadora.
          </p>

          <TechCard
            icon={<Lightbulb className="w-10 h-10" />}
            title="Design como Ponte"
            description="O bom design traduz complexidade em simplicidade. Ele transforma código e algoritmos em experiências humanas, compreensíveis e acolhedoras."
            className="my-8"
          />

          <p>
            A usabilidade não é apenas sobre estética: é sobre <strong>inclusão</strong>. Quando um aplicativo é fácil de usar, ele não exclui idosos, pessoas com baixa escolaridade ou deficiências. Quando uma IA explica suas respostas de forma clara, ela se torna educadora, não apenas ferramenta.
          </p>

          <BlockquoteHighlight>
            "Tecnologia verdadeiramente inovadora é aquela que desaparece na experiência do usuário — tornando-se invisível, intuitiva, natural."
          </BlockquoteHighlight>
        </ArticleSection>

        {/* Conclusion */}
        <ArticleSection title="Tecnologia como Potencializadora, Não Substituta">
          <p>
            A grande questão que nos acompanha nesta era de transformação não é se devemos adotar a tecnologia, mas <strong>como</strong> devemos fazê-lo. A resposta está em manter o humano no centro.
          </p>

          <p>
            A tecnologia não deve substituir nossa capacidade de pensar criticamente, criar com propósito ou tomar decisões éticas. Ela deve ser uma <strong>extensão de nossas habilidades</strong>, uma ferramenta que nos liberta de tarefas repetitivas para que possamos focar no que realmente importa: inovar, conectar, cuidar.
          </p>

          <div className="bg-gradient-primary rounded-xl p-8 my-8 text-primary-foreground shadow-card">
            <p className="text-lg leading-relaxed mb-4">
              Quando usamos a IA para aprender mais rápido, não estamos terceirizando nosso intelecto — estamos acelerando nosso crescimento.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Quando adotamos bancos digitais, não estamos apenas economizando tempo — estamos exigindo transparência e respeito.
            </p>
            <p className="text-lg leading-relaxed">
              Quando defendemos um design acessível e ético, não estamos apenas melhorando produtos — estamos construindo um futuro mais justo.
            </p>
          </div>

          <p className="text-xl font-medium">
            A relação entre pessoas e inovação está sendo redesenhada, e cabe a nós garantir que essa transformação seja inclusiva, consciente e verdadeiramente humana. Porque, no fim, a melhor tecnologia é aquela que nos torna mais livres para ser quem somos — e quem podemos nos tornar.
          </p>
        </ArticleSection>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="text-sm">
            Reflexões sobre tecnologia, design e sociedade • 2025
          </p>
        </footer>

      </article>
    </div>
  );
};

export default Index;
