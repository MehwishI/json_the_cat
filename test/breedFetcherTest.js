const { fetchBreedDescription } = require("../breedFetcher");
const assert = require("chai").assert;

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it("returns a error message , null description for an invalid breed name/non-existent breed, via callback", (done) => {
    fetchBreedDescription("kk", (err, desc) => {
      // we expect  error for this scenario
      assert.equal(desc, null);
      const expectedError = "Breed not found!";

      assert.equal(expectedError, err.trim());

      done();
    });
  });
});
