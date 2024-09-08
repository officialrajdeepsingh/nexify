import type { Metadata } from 'next'

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
    <section className="bg-blue-100">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-10 md:py-20">
        <h2 className="text-3xl font-bold md:text-5xl">Contact us</h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-gray-500 md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        <form
          name="wf-form-name"
          method="get"
          className="mx-auto mb-4 text-left sm:px-4 md:px-20"
        >
          <div className="mb-4 grid w-full grid-cols-2 gap-6">
            <div>
              <label htmlFor="first-name" className="mb-1 font-medium">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder="Enter first name"
                required={true}
              />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-1 font-medium">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
                placeholder="Enter last name"
                required={true}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required={true}
              className="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 text-sm text-black"
            />
          </div>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <label htmlFor="message" className="mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter the message"
              maxLength={5000}
              name="message"
              className="mb-2.5 block h-auto min-h-44 w-full rounded-md border border-solid border-black px-3 py-2 text-sm text-black"
            ></textarea>
          </div>
          <button type="submit" className="inline-block w-full rounded-md cursor-pointer bg-black px-6 py-3 text-center font-semibold text-white" > Submit Now </button>
        </form>
      </div>
    </section>
  );

}

