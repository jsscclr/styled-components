import test from "tape"
import fetchMock from "fetch-mock"
import { getShowById } from "./"

test("getShowById should return example data", assert => {
  const sampleData = {
    title: "Example",
    channel: {
      image: {
        src: "example-logo.jpg",
        alt: "Example logo image",
      },
    },
    image: {
      src: "example.jpg",
      alt: "Example image",
    },
  }

  fetchMock.get("/shows/example.json", sampleData)

  getShowById("example").then(data => {
    assert.ok(data, "getShowById returns data")
    assert.equal(
      sampleData.title,
      data.title,
      "getShowById data has correct title"
    )
  })

  fetchMock.restore()
  assert.end()
})
