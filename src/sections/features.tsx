import Marquee from 'react-fast-marquee'

export default function Features() {
  const feature = {
    title: 'Feature',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque reiciendis ab similique expedita quaerat nesciunt.',
  }

  const features = Array.from({ length: 6 }, () => ({ ...feature }))

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
                key={i}
              >
                <h4 className="text-xl font-heading">
                  {feature.title} {i + 1}
                </h4>
                <p>{feature.text}</p>
              </div>
            )
          })}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => {
              return (
                <div className="flex items-center" key={id}>
                  <span className="mx-8 text-xl font-heading sm:text-2xl lg:text-4xl">
                    Neobrutalism components
                  </span>
                </div>
              )
            })}
        </Marquee>
      </div>
    </div>
  )
}
