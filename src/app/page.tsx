export default function Home() {
  return (
    <main className="grid place-items-center h-screen w-screen p-4">
      {/* text-justify: stretches the words to both edges
        break-all: breaks words at any character to prevent large white gaps
      */}
      <p className="font-serif max-w-xs leading-relaxed">
        thomas visser is a{" "}
        <a
          href="https://www.linkedin.com/in/thomas-visser-79981a182/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          SOFTWARE ENGINEER
        </a>{" "}
        based in{" "}
        <a
          href="https://www.google.com/search?q=PORTLAND"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          PORTLAND
        </a>
        . he has worked at companies like{" "}
        <a
          href="https://cyberresilience.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          RESILIENCE
        </a>{" "}
        and{" "}
        <a
          href="https://www.lovevery.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LOVEVERY
        </a>
        . feel free to{" "}
        <a
          href="mailto:thomascrvisser@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          REACH OUT
        </a>
        .
      </p>
    </main>
  );
}
