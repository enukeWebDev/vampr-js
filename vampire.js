class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numOfVampire = 0;
    let currVampire = this;

    while (currVampire.creator) {
      currVampire = currVampire.creator;
      numOfVampire++;
    }
    return numOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    let moreSeniorVampire = this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
    if (moreSeniorVampire) {
      return true;
    }
    else {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }

  //Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    } else {
      for (let names of this.offspring) {
        if (names.vampireWithName(name)) {
          return names.vampireWithName(name);
        }
      }
    }
    return null;
  }

  //Returns the total number of vampires that exist
  get totalDescendents() {
    //for (let )
  }

  //Returns an array of all the vampires that were converted after 1980
  get allMillenialVampires() {

  }

}

module.exports = Vampire;

