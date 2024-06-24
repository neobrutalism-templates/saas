import { faker } from '@faker-js/faker'

export default function Community() {
  const review = () => {
    return {
      pfp: faker.image.avatar(),
      fullName: faker.person.fullName(),
      jobTitle: faker.person.jobTitle(),
      review: faker.lorem.sentences({ min: 1, max: 3 }),
    }
  }

  return (
    <section className="border-b-border dark:border-b-darkBorder dark:bg-darkBg inset-0 flex w-full flex-col items-center justify-center border-b-2 bg-white bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] font-base">
      <div className="mx-auto w-container max-w-full px-5 py-20 lg:py-[100px]">
        <h2 className="mb-14 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Loved by the community
        </h2>
        <div className="grid grid-cols-3 gap-4 lg:gap-8 w900:grid-cols-1 w900:gap-0">
          {[
            [review(), review()],
            [review(), review(), review()],
            [review(), review()],
          ].map((card, index) => (
            <div className="group flex flex-col justify-center" key={index}>
              {card.map(({ jobTitle, pfp, fullName, review }, index) => (
                <div
                  className="border-border dark:border-darkBorder shadow-light dark:shadow-dark dark:bg-darkBg mb-4 min-h-48 w-full rounded-base border-2 bg-bg p-5 lg:mb-8 w900:mx-auto w900:min-h-20 w900:w-2/3 w500:w-full"
                  key={index}
                >
                  <div className="flex items-center gap-5">
                    <img
                      className="border-border dark:border-darkBorder h-12 w-12 rounded-base border-2"
                      src={pfp}
                      alt="pfp"
                    />

                    <div>
                      <h4 className="text-lg font-heading">{fullName}</h4>
                      <p className="text-sm font-base">{jobTitle}</p>
                    </div>
                  </div>
                  <div className="mt-5">{review}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
