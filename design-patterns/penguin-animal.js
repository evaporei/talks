// 🐧
const penguin = new Animal(
  // Chordata Phylum
  new Phylum({
    Subkingdom: 'Eumetazoa',
    Clade: ['Bilateria', 'Nephrozoa'],
    Superphylum: 'Deuterostomia',
  }),
  // Aves Class
  new Class({
    Clade: 'Ornithurae',
  }),
  // Sphenisciformes Order
  new Order('Sphenisciformes'),
  // Spheniscidae Family
  new Family('Spheniscidae'),
  // Species
  'Eudyptula'
)
