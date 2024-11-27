import type { Metadata } from 'next'
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut.',
  openGraph: {
    title: 'Contact us',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ut.',
    images: [{
      url: "https://cdn.pixabay.com/photo/2023/11/17/22/10/road-8395119_1280.jpg",
      alt: "contact us",
      type: "image/jpeg",
      width: 1280,
      height: 719
    }]
  },
  twitter: {
    site: "https://medium.com/@officialrajdeepsingh",
    creator: "Official_R_deep",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut.",
    title: "contact us",
    images: [{
      url: "https://cdn.pixabay.com/photo/2023/11/17/22/10/road-8395119_1280.jpg",
      alt: "contact us",
      type: "image/jpeg",
      width: 1280,
      height: 719
    }]
  }
}

export default function page() {

  return (
    <section className="bg-blue-400 mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
      <h2 className="text-3xl font-bold md:text-5xl">Contact us</h2>
      <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-800 md:mb-12 lg:mb-16">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna
      </p>
      <div data-mf-id="xkI6W32" data-mf-title="Untitled Form" className='w-full h-[750px]' ></div>
      <Script src="https://minform.io/embed.js"></Script>
    </section>
  );

}

