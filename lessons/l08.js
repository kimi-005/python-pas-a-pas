(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l08", num: 8, track: "bases",
  title: { fr: "Les listes", en: "Lists" },
  intro: {
    fr: "« Une liste Python est une liste <strong>ordonnée</strong> d'éléments (d'objets) pouvant être de natures différentes. »",
    en: "\"A Python list is an <strong>ordered</strong> collection of elements (objects) that can be of different kinds.\""
  },
  blocks: [
    { t: "p",
      fr: "On garde cette liste tout au long de la leçon. Elle contient un entier, un flottant, un booléen, une chaîne de caractères et… une liste.",
      en: "We'll keep this list for the whole lesson. It holds an integer, a float, a boolean, a string and… a list." },
    { t: "code", code: "L = [12, 3.7, True, \"demain\", [1, 2]]\nL\nlen(L)" },
    { t: "note",
      fr: "<strong>Remarque importante :</strong> l'ordre compte. <code>[1, 2] == [2, 1]</code> est faux, et <code>[1, 2] == [1, 2, 2]</code> aussi.",
      en: "<strong>Important:</strong> order matters. <code>[1, 2] == [2, 1]</code> is false, and so is <code>[1, 2] == [1, 2, 2]</code>." },

    { t: "h", fr: "L'index des objets", en: "Indexes" },
    { t: "index", list: ["12", "3.7", "True", "'demain'", "[1, 2]"] },
    { t: "p",
      fr: "Le premier objet a l'index <strong>0</strong>, pas 1. On peut aussi lire la liste « à l'envers » : <code>L[-1]</code> est le dernier objet.",
      en: "The first object has index <strong>0</strong>, not 1. You can also read the list backwards: <code>L[-1]</code> is the last object." },
    { t: "code", code: "L = [12, 3.7, True, \"demain\", [1, 2]]\nL[0]\nL[3]\nL[-1]\nL[0] = 100\nL" },

    { t: "h", fr: "Appartenance et parcours", en: "Membership and looping" },
    { t: "code", code: "L = [12, 3.7, True, \"demain\", [1, 2]]\n3.7 in L\nfor k in L:\n    print(k)" },
    { t: "p",
      fr: "<code>for k in L:</code> donne successivement à k chaque objet de la liste. C'est la façon de « passer en revue » tous les éléments.",
      en: "<code>for k in L:</code> gives k each object of the list in turn. This is how you go through all the elements." },

    { t: "h", fr: "Concaténation : + et *", en: "Joining lists: + and *" },
    { t: "code", code: "[3, 7, \"chat\"] + [-1, 2, \"chien\"]\n3 * [1, 2]" },

    { t: "h", fr: "Fonctions natives sur les listes", en: "Built-in functions on lists" },
    { t: "table",
      head: { fr: ["Fonction", "Rôle"], en: ["Function", "What it does"] },
      rows: [
        ["max(L), min(L)", { fr: "plus grand, plus petit élément", en: "largest, smallest element" }],
        ["len(L)", { fr: "nombre d'éléments", en: "number of elements" }],
        ["sum(L)", { fr: "somme des éléments", en: "sum of the elements" }],
        ["sorted(L)", { fr: "renvoie une copie triée (L ne change pas)", en: "returns a sorted copy (L doesn't change)" }],
        ["del L[i]", { fr: "supprime l'objet d'index i", en: "deletes the object at index i" }]
      ] },
    { t: "code", code: "L = [1, 3, 2]\nM = sorted(L)\nM\nL" },
    { t: "note",
      fr: "<code>sorted(L)</code> ne modifie pas la liste de départ : elle ne modifie pas l'antécédent ! Dans la leçon 9, la méthode <code>L.sort()</code>, elle, modifiera L.",
      en: "<code>sorted(L)</code> doesn't change the original list: it doesn't change its input! In lesson 9, the method <code>L.sort()</code> will change L." }
  ],
  exercises: [
    { t: "predict", id: "l08-p1",
      title: { fr: "Index et appartenance", en: "Indexes and membership" },
      setup: "L = [12, 3.7, True, \"demain\", [1, 2]]",
      items: [
        { code: "L[0]" },
        { code: "L[1]" },
        { code: "L[3]" },
        { code: "L[-1]" },
        { code: "L[-4]" },
        { code: "L[4][0]",
          note: { fr: "L[4] est la liste [1, 2], et son objet d'index 0 est 1.", en: "L[4] is the list [1, 2], and its object at index 0 is 1." } },
        { code: "L[5]",
          note: { fr: "L a 5 objets, d'index 0 à 4. L'index 5 n'existe pas.", en: "L has 5 objects, indexes 0 to 4. Index 5 doesn't exist." } },
        { code: "len(L)" },
        { code: "3.7 in L" },
        { code: "4 not in L" }
      ] },
    { t: "predict", id: "l08-p2",
      title: { fr: "Opérations et fonctions", en: "Operations and functions" },
      items: [
        { code: "[1, 2] == [2, 1]" },
        { code: "[3, 7, \"chat\"] + [-1, 2, \"chien\"]" },
        { code: "3 * [1, 2]" },
        { code: "max([3, 2.7, 4/3])" },
        { code: "min([3, 2.7, 4/3])" },
        { code: "sum([1, 2, 5.7])" },
        { code: "max([\"d\", \"c\", \"e\", \"h\"])",
          note: { fr: "Pour des chaînes, max et min utilisent l'ordre alphabétique.", en: "For strings, max and min use alphabetical order." } },
        { code: "sorted([1, 3, 2])" },
        { code: "L = [1, 3, 2]\nM = sorted(L)\nL" },
        { code: "L = [1, 3, -7, 0, 3, 5, 3]\ndel L[4]\nL" },
        { code: "sum([5, \"Usly\"])",
          note: { fr: "On ne peut pas additionner un nombre et une chaîne de caractères.", en: "You can't add a number and a string." } }
      ] },
    {
      "t": "fill",
      "id": "l08-f1",
      "title": {
        "fr": "Au-dessus de la moyenne",
        "en": "Above the mean"
      },
      "prompt": {
        "fr": "Complète la fonction <code>au_dessus(L)</code> qui renvoie le nombre de notes de la liste L strictement supérieures à la moyenne de L.",
        "en": "Fill in the function <code>au_dessus(L)</code> that returns how many marks in the list L are strictly greater than the mean of L."
      },
      "template": "def au_dessus(L):\n    m = {{sum(L) / len(L)}}\n    c = 0\n    for x in {{L}}:\n        if {{x > m}}:\n            c = c + 1\n    return c",
      "tests": [
        {
          "call": "au_dessus([10, 12, 8, 14])",
          "expect": "2"
        },
        {
          "call": "au_dessus([5, 5, 5])",
          "expect": "0"
        },
        {
          "call": "au_dessus([1, 2, 3, 10])",
          "expect": "1"
        }
      ],
      "hints": [
        {
          "fr": "La moyenne, c'est la somme des notes divisée par le nombre de notes : <code>sum</code> et <code>len</code>.",
          "en": "The mean is the sum of the marks divided by how many there are: <code>sum</code> and <code>len</code>."
        },
        {
          "fr": "La boucle passe en revue la liste L, et on compte les notes x telles que <code>x > m</code>.",
          "en": "The loop goes through the list L, and counts the marks x such that <code>x > m</code>."
        }
      ]
    },
    { t: "code", id: "l08-c1",
      title: { fr: "Le maximum, sans max", en: "The maximum, without max" },
      prompt: { fr: "Écris la fonction <code>maxi(L)</code> qui renvoie le plus grand élément d'une liste de nombres non vide, sans utiliser <code>max</code> ni <code>sorted</code>.",
                en: "Write the function <code>maxi(L)</code> that returns the largest element of a non-empty list of numbers, without using <code>max</code> or <code>sorted</code>." },
      starter: { fr: "def maxi(L):\n    m = L[0]\n    ", en: "def maxi(L):\n    m = L[0]\n    " },
      tests: [
        { call: "maxi([3, 1, 5, 2])", expect: "5" },
        { call: "maxi([-4, -2, -9])", expect: "-2" },
        { call: "maxi([7])", expect: "7" }
      ],
      require: ["for", "return"], forbid: ["max", "sorted", "sort"],
      hint: { fr: "Passe en revue la liste avec <code>for k in L:</code>. Si k est plus grand que m, remplace m par k.",
              en: "Go through the list with <code>for k in L:</code>. If k is bigger than m, replace m with k." },
      solution: "def maxi(L):\n    m = L[0]\n    for k in L:\n        if k > m:\n            m = k\n    return m" },
    { t: "code", id: "l08-c2",
      title: { fr: "La moyenne, sans sum ni len", en: "The mean, without sum or len" },
      prompt: { fr: "Écris la fonction <code>moyenne(L)</code> qui renvoie la moyenne des nombres d'une liste non vide, sans utiliser <code>sum</code> ni <code>len</code>.",
                en: "Write the function <code>moyenne(L)</code> that returns the mean of a non-empty list of numbers, without using <code>sum</code> or <code>len</code>." },
      starter: { fr: "def moyenne(L):\n    s = 0\n    n = 0\n    ", en: "def moyenne(L):\n    s = 0\n    n = 0\n    " },
      tests: [
        { call: "moyenne([12, 15, 9])", expect: "12.0" },
        { call: "moyenne([10])", expect: "10.0" },
        { call: "moyenne([1, 2, 3, 4])", expect: "2.5" }
      ],
      require: ["for", "return"], forbid: ["sum", "len"],
      hint: { fr: "Dans la boucle, <code>s</code> additionne les éléments et <code>n</code> les compte. Après la boucle : <code>return s / n</code>.",
              en: "In the loop, <code>s</code> adds up the elements and <code>n</code> counts them. After the loop: <code>return s / n</code>." },
      solution: "def moyenne(L):\n    s = 0\n    n = 0\n    for k in L:\n        s = s + k\n        n = n + 1\n    return s / n" },
    { t: "code", id: "l08-c3",
      title: { fr: "Compter les nombres pairs", en: "Counting even numbers" },
      prompt: { fr: "Écris la fonction <code>nb_pairs(L)</code> qui renvoie le nombre d'entiers pairs dans la liste L.",
                en: "Write the function <code>nb_pairs(L)</code> that returns how many even integers the list L contains." },
      starter: { fr: "def nb_pairs(L):\n    ", en: "def nb_pairs(L):\n    " },
      tests: [
        { call: "nb_pairs([1, 2, 3, 4, 6])", expect: "3" },
        { call: "nb_pairs([7, 9])", expect: "0" },
        { call: "nb_pairs([])", expect: "0" }
      ],
      require: ["for", "return"],
      hint: { fr: "Un compteur <code>c = 0</code>, puis pour chaque k de L : si <code>k % 2 == 0</code>, ajoute 1 à c.",
              en: "A counter <code>c = 0</code>, then for each k in L: if <code>k % 2 == 0</code>, add 1 to c." },
      solution: "def nb_pairs(L):\n    c = 0\n    for k in L:\n        if k % 2 == 0:\n            c = c + 1\n    return c" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l08-d1",
      "title": {
        "fr": "Variance et écart type",
        "en": "Variance and standard deviation"
      },
      "prompt": {
        "fr": "Pour une série de valeurs x<sub>1</sub>, …, x<sub>n</sub> de moyenne m, la variance est la moyenne des carrés des écarts à la moyenne : V = [(x<sub>1</sub> − m)² + … + (x<sub>n</sub> − m)²] / n, et l'écart type est σ = √V. <code>moyenne</code> est déjà écrite : écris <code>variance(L)</code>, qui appelle <code>moyenne</code>, puis <code>ecart_type(L)</code>. Pour la racine, utilise la puissance ½.",
        "en": "For a series of values x<sub>1</sub>, …, x<sub>n</sub> with mean m, the variance is the mean of the squared deviations from the mean: V = [(x<sub>1</sub> − m)² + … + (x<sub>n</sub> − m)²] / n, and the standard deviation is σ = √V. <code>moyenne</code> is already written: write <code>variance(L)</code>, which calls <code>moyenne</code>, then <code>ecart_type(L)</code>. For the square root, use the power ½."
      },
      "starter": {
        "fr": "def moyenne(L):\n    return sum(L) / len(L)\n\ndef variance(L):\n    m = moyenne(L)\n    \n\ndef ecart_type(L):\n    ",
        "en": "def moyenne(L):\n    return sum(L) / len(L)\n\ndef variance(L):\n    m = moyenne(L)\n    \n\ndef ecart_type(L):\n    "
      },
      "tests": [
        {
          "call": "variance([2, 4, 4, 4, 5, 5, 7, 9])",
          "expect": "4.0"
        },
        {
          "call": "ecart_type([2, 4, 4, 4, 5, 5, 7, 9])",
          "expect": "2.0"
        },
        {
          "call": "variance([10])",
          "expect": "0.0"
        },
        {
          "call": "variance([1, 2, 3, 4])",
          "expect": "1.25"
        },
        {
          "call": "ecart_type([1, 2, 3, 4])",
          "expect": "1.25 ** 0.5"
        }
      ],
      "require": [
        "for",
        "return"
      ],
      "hints": [
        {
          "fr": "Calcule la moyenne m une seule fois au début, puis parcours la liste avec <code>for x in L:</code>.",
          "en": "Compute the mean m once at the start, then go through the list with <code>for x in L:</code>."
        },
        {
          "fr": "Un accumulateur <code>s</code> additionne <code>(x - m) ** 2</code> pour chaque x ; après la boucle, on divise par <code>len(L)</code>.",
          "en": "An accumulator <code>s</code> adds up <code>(x - m) ** 2</code> for each x; after the loop, divide by <code>len(L)</code>."
        },
        {
          "fr": "<code>ecart_type</code> tient en une ligne : <code>return variance(L) ** 0.5</code>.",
          "en": "<code>ecart_type</code> fits in one line: <code>return variance(L) ** 0.5</code>."
        }
      ],
      "solution": "def moyenne(L):\n    return sum(L) / len(L)\n\ndef variance(L):\n    m = moyenne(L)\n    s = 0\n    for x in L:\n        s = s + (x - m) ** 2\n    return s / len(L)\n\ndef ecart_type(L):\n    return variance(L) ** 0.5"
    },
    {
      "t": "code",
      "id": "l08-d2",
      "title": {
        "fr": "La médiane",
        "en": "The median"
      },
      "prompt": {
        "fr": "La médiane d'une série partage les valeurs, rangées dans l'ordre croissant, en deux moitiés. Avec n valeurs triées : si n est impair, c'est la valeur du milieu ; si n est pair, c'est la moyenne des deux valeurs du milieu. Écris <code>mediane(L)</code> pour une liste non vide, sans modifier L.",
        "en": "The median of a series splits the values, sorted in increasing order, into two halves. With n sorted values: if n is odd, it's the middle value; if n is even, it's the mean of the two middle values. Write <code>mediane(L)</code> for a non-empty list, without changing L."
      },
      "starter": {
        "fr": "def mediane(L):\n    T = sorted(L)\n    n = len(T)\n    ",
        "en": "def mediane(L):\n    T = sorted(L)\n    n = len(T)\n    "
      },
      "tests": [
        {
          "call": "mediane([3, 1, 2])",
          "expect": "2"
        },
        {
          "call": "mediane([4, 1, 3, 2])",
          "expect": "2.5"
        },
        {
          "call": "mediane([7])",
          "expect": "7"
        },
        {
          "call": "mediane([5, 5, 1, 9, 2, 8])",
          "expect": "5.0"
        },
        {
          "call": "_intacte()",
          "expect": "[3, 1, 2]",
          "desc": {
            "fr": "la liste donnée n'est pas modifiée",
            "en": "the list passed in isn't changed"
          },
          "helper": "def _intacte():\n    L = [3, 1, 2]\n    mediane(L)\n    return L"
        }
      ],
      "require": [
        "len",
        "return"
      ],
      "hints": [
        {
          "fr": "Travaille sur une copie triée : <code>T = sorted(L)</code>. La fonction <code>sorted</code> ne modifie pas L.",
          "en": "Work on a sorted copy: <code>T = sorted(L)</code>. The <code>sorted</code> function doesn't change L."
        },
        {
          "fr": "Les index vont de 0 à n − 1. Si n est impair, le milieu est à l'index <code>n // 2</code>. Si n est pair, les deux valeurs du milieu sont aux index <code>n // 2 - 1</code> et <code>n // 2</code>.",
          "en": "Indexes go from 0 to n − 1. If n is odd, the middle is at index <code>n // 2</code>. If n is even, the two middle values are at indexes <code>n // 2 - 1</code> and <code>n // 2</code>."
        },
        {
          "fr": "<code>if n % 2 == 1:</code> renvoie <code>T[n // 2]</code>, <code>else:</code> renvoie <code>(T[n // 2 - 1] + T[n // 2]) / 2</code>.",
          "en": "<code>if n % 2 == 1:</code> return <code>T[n // 2]</code>, <code>else:</code> return <code>(T[n // 2 - 1] + T[n // 2]) / 2</code>."
        }
      ],
      "solution": "def mediane(L):\n    T = sorted(L)\n    n = len(T)\n    if n % 2 == 1:\n        return T[n // 2]\n    else:\n        return (T[n // 2 - 1] + T[n // 2]) / 2",
      "after": {
        "fr": "La médiane résiste aux valeurs extrêmes : dans [1, 2, 3, 1000], la moyenne vaut 251,5 mais la médiane seulement 2,5.",
        "en": "The median isn't thrown off by extreme values: in [1, 2, 3, 1000], the mean is 251.5 but the median is only 2.5."
      }
    }
  ]
});
