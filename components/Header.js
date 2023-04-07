import Link from 'next/link';

export default function Header({ name, email  }) {
  return (
    <header className="pt-20 pb-12">
      <script type="module" src="./three.js" async></script>
      <div id="canvas-container"></div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
        <br />
        <a href="mailto:pokuonglao123@gmail.com">pokuonglao123@gmail.com</a>
      </p>
    </header>
  );
}
