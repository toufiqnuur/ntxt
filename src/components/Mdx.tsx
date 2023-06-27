import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const CustomLink = (props) => {
  const url = props.href;

  if (url.startsWith("/")) {
    return (
      <Link href={url} {...props}>
        {props.children}
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const components = {
  a: CustomLink,
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-quoteless">
      <Component components={components} />
    </div>
  );
}
