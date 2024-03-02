import { load } from 'cheerio'

export const useImages = (rawHtml: string) => {
  const $ = load(rawHtml)
  const nuxtImg = useImage()

  $('img').each((_, img) => {
    const { src, srcset, sizes } = nuxtImg.getSizes(img.attribs.src, {
      sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
      modifiers: {
        quality: 70,
      },
    })
    $(img).attr("src", src)
    $(img).attr("srcset", srcset)
    $(img).attr("sizes", sizes)
  })

  return $.html()
}
