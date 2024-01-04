import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

function getHeading(level: number, children: React.ReactNode) {
  let text = "";
  if (children !== null && children !== undefined) {
    text = children.toString();
  }
  const escapedText = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').slice(0,32);

  const CustomHeaderTag = `h${level}` as keyof JSX.IntrinsicElements;

  if (escapedText === "") {
    return <CustomHeaderTag className={`text-${6-level}xl font-bold mb-2`}>{children}</CustomHeaderTag>;
  } else {
    return <CustomHeaderTag className={`text-${6-level}xl font-bold mb-2`}><a id={escapedText} className="anchor" href={`#${escapedText}`}>{children}</a></CustomHeaderTag>;
  }
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => {
      return getHeading(1, children);
    },
    h2: ({ children }) => {
      return getHeading(2, children);
    },
    h3: ({ children }) => {
      return getHeading(3, children);
    },
    h4: ({ children }) => {
      return getHeading(4, children);
    },
    h5: ({ children }) => {
      return getHeading(5, children);
    },
    p: ({ children }) => <p className="mb-2">{children}</p>,
    a: ({ children, href }) => <a className="text-blue" href={href}>{children}</a>,
    ul: ({ children }) => <ul className="list-disc mb-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal mb-2">{children}</ol>,
    li: ({ children }) => <li className="ml-6">{children}</li>,
    code: ({ children }) => <code className="bg-lightgray">{children}</code>, // TODO: p-4 w-full inline-block  for block level
    pre: ({ children }) => <pre className="bg-lightgray p-4 mb-2 w-fit inline-block">{children}</pre>,
    img: (props) => (
      <Image
        width={512}
        height={512}
        className="float-right p-4"
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
