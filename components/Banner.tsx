import { getFlags } from '@/app/getFlags';
export async function Banner() {
  const { banner_discount } = await getFlags();
  const BannerDiscount = banner_discount.toString()
  return (
    <section role="banner" className="w-full mx-auto mb-2 bg-blue-400">
      <div className="w-full flex flex-col items-center border-b-2 border-black p-3 md:px-4 md:py-4 md:flex-row justify-center">
        <div className="flex items-center">
          {banner_discount && <p> Dont miss out on our exclusive summer sale! Enjoy <span className="px-2 py-1 bg-black text-white text-center mx-1"> {BannerDiscount}% </span> off on selected items. Hurry, offer ends in 7 days. </p>}
        </div>
      </div>
    </section>
  )
}
