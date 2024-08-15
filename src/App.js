import "./App.css";
import elifPhoto from "./assets/elif.png";

function App() {
  return (
    <div className="mx-40">
      <header className="min-h-16 flex items-center text-2xl font-serif">Elif Saracoglu</header>
      <div className="flex flex-col items-center">
        <img src={elifPhoto} alt="Elif" className="max-w-[300px] my-12" />
        <p className="mb-8">
          Elif Saracoglu is a dynamic professional renowned for her expertise in project management and digital
          marketing. With a background in computer science, Elif has seamlessly integrated her technical skills with her
          passion for creative marketing strategies, leading to a successful career in various tech-driven industries.
          Her approach often involves leveraging cutting-edge technologies to optimize brand visibility and consumer
          engagement, making her a go-to expert in her field.
        </p>

        <p className="mb-8">
          In her role as a digital marketing strategist, Elif has spearheaded numerous campaigns that have significantly
          boosted online presence and sales for her clients. She is particularly skilled in utilizing analytics to drive
          the decision-making process, ensuring that each campaign is tailored to meet the specific demographics and
          needs of the target audience. Her work is characterized by a meticulous attention to detail and a relentless
          pursuit of innovation.
        </p>

        <p className="mb-8">
          Elif is also an avid advocate for continuous learning and professional development. She regularly participates
          in workshops and seminars to keep abreast of the latest trends in digital marketing and project management.
          Additionally, Elif is committed to mentoring young professionals in her field, offering guidance and support
          to help them grow their skills and advance their careers.
        </p>

        <p className="mb-8">
          Outside of her professional life, Elif is an enthusiastic traveler and photographer. Her travels have taken
          her from the bustling markets of Istanbul to the serene landscapes of the Scottish Highlands, capturing
          stunning visuals that reflect her artistic eye. These experiences not only satisfy her love for adventure but
          also inspire her creative processes at work, where she applies a global perspective to her projects.
        </p>
      </div>
    </div>
  );
}

export default App;
