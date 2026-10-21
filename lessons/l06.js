(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "l06", num: 6, track: "bases",
  title: { fr: "La boucle « Tant que » : while", en: "The while loop" },
  intro: {
    fr: "La boucle <code>while</code> est une boucle <strong>non bornée</strong> : elle tourne tant qu'une condition est vraie. On ne sait pas à l'avance combien de tours elle fera.",
    en: "The <code>while</code> loop is an <strong>unbounded</strong> loop: it runs as long as a condition is true. You don't know in advance how many times it will run."
  },
  blocks: [
    { t: "h", fr: "De l'algorithme à Python", en: "From algorithm to Python" },
    { t: "compare",
      algo: { fr: "a ← 6\nb ← 0\nTant que a < 20 :\n    a ← a × 1,5\n    b ← b + 1\nFin Tant que\nAfficher a et b",
              en: "a ← 6\nb ← 0\nWhile a < 20:\n    a ← a × 1.5\n    b ← b + 1\nEnd While\nDisplay a and b" },
      code: "a = 6\nb = 0\nwhile a < 20:\n    a = 1.5 * a\n    b = b + 1\na, b",
      run: true,
      caption: { fr: "Ici, b compte le nombre de tours. On obtient a = 20.25 après 3 tours. La dernière ligne <code>a, b</code> affiche les deux valeurs, entre parenthèses.",
                 en: "Here b counts the passes. We get a = 20.25 after 3 passes. The last line <code>a, b</code> shows both values, in brackets." } },
    { t: "note",
      fr: "<strong>Attention à la boucle infinie.</strong> Si la condition reste toujours vraie, la boucle ne s'arrête jamais. Dans cette appli, un programme qui tourne plus de 5 secondes est arrêté.",
      en: "<strong>Beware of infinite loops.</strong> If the condition stays true forever, the loop never stops. In this app, a program running for more than 5 seconds is stopped." },

    { t: "h", fr: "Algorithme de seuil", en: "Threshold algorithms" },
    { t: "p",
      fr: "Question typique : « quel est le plus petit entier n tel que 2<sup>n</sup> ≥ 1000 ? ». On augmente n tant que le seuil n'est pas atteint.",
      en: "Typical question: \"what is the smallest integer n such that 2<sup>n</sup> ≥ 1000?\". Increase n as long as the threshold isn't reached." },
    { t: "code", code: "n = 1\nwhile 2 ** n < 1000:\n    n = n + 1\nn" },
    { t: "p",
      fr: "À la sortie de la boucle, la condition <code>2 ** n < 1000</code> est fausse pour la première fois : n est la réponse. Les puissances de 10 s'écrivent <code>10 ** -5</code> ou <code>1e-5</code>.",
      en: "When the loop ends, the condition <code>2 ** n < 1000</code> is false for the first time, so n is the answer. Powers of 10 can be written <code>10 ** -5</code> or <code>1e-5</code>." }
  ],
  exercises: [
    { t: "predict", id: "l06-p1",
      title: { fr: "Compte les tours", en: "Count the passes" },
      items: [
        { code: "a = 8\nn = 0\nwhile a < 21:\n    a = a + 3\n    n = n + 1\nn" },
        { code: "a = 6\nb = 0\nwhile a < 20:\n    a = 1.5 * a\n    b = b + 1\nb" },
        { code: "n = 1\nwhile 2 ** n < 1000:\n    n = n + 1\nn" },
        { code: "k = 10\nwhile k > 0:\n    k = k - 3\nk" },
        { code: "x = 100\nc = 0\nwhile x > 1:\n    x = x / 2\n    c = c + 1\nc" },
        { code: "n = 0\nwhile n < 3:\n    print(n)\n    n = n + 1" }
      ] },
    {
      "t": "fill",
      "id": "l06-f1",
      "title": {
        "fr": "Une population qui diminue",
        "en": "A shrinking population"
      },
      "prompt": {
        "fr": "Une ville compte <code>P</code> habitants et perd 3 % de ses habitants chaque année. Les variables <code>P</code> et <code>S</code> sont déjà définies. Complète l'algorithme pour qu'il calcule dans <code>n</code> le nombre d'années au bout duquel la population devient strictement inférieure au seuil <code>S</code>.",
        "en": "A town has <code>P</code> inhabitants and loses 3 % of them every year. The variables <code>P</code> and <code>S</code> are already defined. Fill in the algorithm so that it computes in <code>n</code> the number of years after which the population becomes strictly lower than the threshold <code>S</code>."
      },
      "template": {
        "fr": "# P et S sont déjà définies\nn = 0\nwhile {{P >= S}}:\n    P = {{P * 0.97}}\n    n = {{n + 1}}",
        "en": "# P and S are already defined\nn = 0\nwhile {{P >= S}}:\n    P = {{P * 0.97}}\n    n = {{n + 1}}"
      },
      "tests": [
        {
          "setup": "P = 20000\nS = 15000",
          "call": "n", "expect": "10"
        },
        {
          "setup": "P = 10000\nS = 10000",
          "call": "n", "expect": "1"
        },
        {
          "setup": "P = 1000\nS = 2000",
          "call": "n", "expect": "0"
        }
      ],
      "hints": [
        {
          "fr": "La boucle continue <em>tant que</em> la population n'est pas encore passée sous le seuil, c'est-à-dire tant que P ≥ S.",
          "en": "The loop goes on <em>as long as</em> the population hasn't dropped below the threshold yet, that is while P ≥ S."
        },
        {
          "fr": "Perdre 3 %, c'est multiplier par 1 − 0,03 = 0,97. Et n compte les années : il augmente de 1 à chaque tour.",
          "en": "Losing 3 % means multiplying by 1 − 0.03 = 0.97. And n counts the years: it goes up by 1 on each pass."
        }
      ]
    },
    { t: "code", id: "l06-c1",
      title: { fr: "Suite géométrique et seuil", en: "Geometric sequence and threshold" },
      prompt: { fr: "La suite (u<sub>n</sub>) est géométrique de raison q = 0,3 et de premier terme u<sub>0</sub> = 7. Elle tend vers 0. Calcule dans <code>n</code> le plus petit entier tel que u<sub>n</sub> ≤ 10<sup>−5</sup>.",
                en: "The sequence (u<sub>n</sub>) is geometric with ratio q = 0.3 and first term u<sub>0</sub> = 7. It tends to 0. Compute in <code>n</code> the smallest integer such that u<sub>n</sub> ≤ 10<sup>−5</sup>." },
      algo: { fr: "u ← 7\nn ← 0\nTant que u > 10⁻⁵ :\n    u ← u × 0,3\n    n ← n + 1\nFin Tant que\nAfficher n",
              en: "u ← 7\nn ← 0\nWhile u > 10⁻⁵:\n    u ← u × 0.3\n    n ← n + 1\nEnd While\nDisplay n" },
      starter: { fr: "u = 7\nn = 0\n", en: "u = 7\nn = 0\n" },
      tests: [ { call: "n", expect: "12" } ],
      require: ["while"],
      hint: { fr: "<code>while u > 10 ** -5:</code> puis, dans le bloc, <code>u = u * 0.3</code> et <code>n = n + 1</code>.",
              en: "<code>while u > 10 ** -5:</code> then, inside the block, <code>u = u * 0.3</code> and <code>n = n + 1</code>." },
      solution: "u = 7\nn = 0\nwhile u > 10 ** -5:\n    u = u * 0.3\n    n = n + 1",
      after: { fr: "On peut donc affirmer : pour tout n ≥ 12, u<sub>n</sub> ≤ 10<sup>−5</sup> (la suite est décroissante).",
               en: "So we can state: for all n ≥ 12, u<sub>n</sub> ≤ 10<sup>−5</sup> (the sequence is decreasing)." } },
    { t: "code", id: "l06-c2",
      title: { fr: "Dépasser un seuil A", en: "Going past a threshold A" },
      prompt: { fr: "La variable <code>A</code> est définie. Calcule dans <code>n</code> le plus petit entier n ≥ 0 tel que 2<sup>n</sup> &gt; A.",
                en: "The variable <code>A</code> is defined. Compute in <code>n</code> the smallest integer n ≥ 0 such that 2<sup>n</sup> &gt; A." },
      starter: { fr: "# A est déjà définie\nn = 0\n", en: "# A is already defined\nn = 0\n" },
      tests: [
        { setup: "A = 1000", call: "n", expect: "10" },
        { setup: "A = 1", call: "n", expect: "1" },
        { setup: "A = 10 ** 6", call: "n", expect: "20" }
      ],
      require: ["while"],
      hint: { fr: "Tant que 2<sup>n</sup> ne dépasse pas A, on augmente n : <code>while 2 ** n <= A:</code>.",
              en: "As long as 2<sup>n</sup> doesn't exceed A, increase n: <code>while 2 ** n <= A:</code>." },
      solution: "n = 0\nwhile 2 ** n <= A:\n    n = n + 1" },
    { t: "code", id: "l06-c3",
      title: { fr: "Doubler un capital", en: "Doubling an investment" },
      prompt: { fr: "Un capital <code>C</code> est placé à <code>t</code> % par an (intérêts composés) : chaque année, il est multiplié par 1 + t/100. Les variables C et t sont définies. Calcule dans <code>annees</code> le nombre d'années nécessaires pour que le capital atteigne au moins le double de C.",
                en: "An amount <code>C</code> is invested at <code>t</code> % per year (compound interest): each year it is multiplied by 1 + t/100. The variables C and t are defined. Compute in <code>annees</code> the number of years needed for the amount to reach at least twice C." },
      starter: { fr: "# C et t sont déjà définies\ncapital = C\nannees = 0\n", en: "# C and t are already defined\ncapital = C\nannees = 0\n" },
      tests: [
        { setup: "C = 1000\nt = 3", call: "annees", expect: "24" },
        { setup: "C = 500\nt = 10", call: "annees", expect: "8" },
        { setup: "C = 2000\nt = 50", call: "annees", expect: "2" }
      ],
      require: ["while"],
      hint: { fr: "<code>while capital < 2 * C:</code> puis multiplie <code>capital</code> par <code>1 + t / 100</code> et ajoute 1 à <code>annees</code>.",
              en: "<code>while capital < 2 * C:</code> then multiply <code>capital</code> by <code>1 + t / 100</code> and add 1 to <code>annees</code>." },
      solution: "capital = C\nannees = 0\nwhile capital < 2 * C:\n    capital = capital * (1 + t / 100)\n    annees = annees + 1" }
  ],
  challenges: [
    {
      "t": "code",
      "id": "l06-d1",
      "title": {
        "fr": "Le nombre de chiffres",
        "en": "The number of digits"
      },
      "prompt": {
        "fr": "La variable <code>n</code> contient un entier n ≥ 0. Calcule dans <code>c</code> son nombre de chiffres, avec une boucle <code>while</code> et sans convertir n en chaîne de caractères.",
        "en": "The variable <code>n</code> holds an integer n ≥ 0. Compute in <code>c</code> how many digits it has, with a <code>while</code> loop and without converting n to a string."
      },
      "starter": {
        "fr": "# n est déjà définie\nc = 1\n",
        "en": "# n is already defined\nc = 1\n"
      },
      "tests": [
        {
          "setup": "n = 2026",
          "call": "c", "expect": "4"
        },
        {
          "setup": "n = 7",
          "call": "c", "expect": "1"
        },
        {
          "setup": "n = 0",
          "call": "c", "expect": "1"
        },
        {
          "setup": "n = 1000000",
          "call": "c", "expect": "7"
        },
        {
          "setup": "n = 99",
          "call": "c", "expect": "2"
        }
      ],
      "require": [
        "while",
        "//"
      ],
      "forbid": [
        "str",
        "len"
      ],
      "hints": [
        {
          "fr": "Diviser par 10 avec <code>//</code> enlève le dernier chiffre : 2026 → 202 → 20 → 2.",
          "en": "Dividing by 10 with <code>//</code> removes the last digit: 2026 → 202 → 20 → 2."
        },
        {
          "fr": "Compte combien de fois on peut enlever un chiffre tant qu'il en reste au moins deux, c'est-à-dire tant que n ≥ 10.",
          "en": "Count how many times you can remove a digit while at least two are left, that is while n ≥ 10."
        },
        {
          "fr": "<code>while n >= 10:</code> puis <code>n = n // 10</code> et <code>c = c + 1</code>. En partant de c = 1, le cas n = 0 marche aussi.",
          "en": "<code>while n >= 10:</code> then <code>n = n // 10</code> and <code>c = c + 1</code>. Starting from c = 1, the case n = 0 works too."
        }
      ],
      "solution": "c = 1\nwhile n >= 10:\n    n = n // 10\n    c = c + 1"
    },
    {
      "t": "code",
      "id": "l06-d2",
      "title": {
        "fr": "La série harmonique",
        "en": "The harmonic series"
      },
      "prompt": {
        "fr": "La somme H<sub>n</sub> = 1 + 1/2 + 1/3 + … + 1/n grandit très lentement, mais finit par dépasser n'importe quel nombre. La variable <code>A</code> est définie : calcule dans <code>n</code> le plus petit entier tel que H<sub>n</sub> &gt; A.",
        "en": "The sum H<sub>n</sub> = 1 + 1/2 + 1/3 + … + 1/n grows very slowly, but eventually exceeds any number. The variable <code>A</code> is defined: compute in <code>n</code> the smallest integer such that H<sub>n</sub> &gt; A."
      },
      "starter": {
        "fr": "# A est déjà définie\nn = 0\nH = 0\n",
        "en": "# A is already defined\nn = 0\nH = 0\n"
      },
      "tests": [
        {
          "setup": "A = 1",
          "call": "n", "expect": "2"
        },
        {
          "setup": "A = 2",
          "call": "n", "expect": "4"
        },
        {
          "setup": "A = 3",
          "call": "n", "expect": "11"
        },
        {
          "setup": "A = 5",
          "call": "n", "expect": "83"
        }
      ],
      "require": [
        "while"
      ],
      "hints": [
        {
          "fr": "C'est un algorithme de seuil : on ajoute des termes tant que la somme ne dépasse pas A.",
          "en": "It's a threshold algorithm: keep adding terms as long as the sum doesn't exceed A."
        },
        {
          "fr": "Il faut deux variables : n (le nombre de termes déjà ajoutés) et H (leur somme). À chaque tour, n augmente de 1, puis on ajoute 1/n à H.",
          "en": "You need two variables: n (how many terms have been added) and H (their sum). On each pass, n goes up by 1, then 1/n is added to H."
        },
        {
          "fr": "<code>while H <= A:</code> puis <code>n = n + 1</code> et <code>H = H + 1 / n</code>. Après la boucle, n est la réponse.",
          "en": "<code>while H <= A:</code> then <code>n = n + 1</code> and <code>H = H + 1 / n</code>. After the loop, n is the answer."
        }
      ],
      "solution": "n = 0\nH = 0\nwhile H <= A:\n    n = n + 1\n    H = H + 1 / n",
      "after": {
        "fr": "Pour dépasser 10, il faut 12 367 termes ; pour dépasser 20, plus de 272 millions !",
        "en": "To go past 10 you need 12,367 terms; to go past 20, more than 272 million!"
      }
    }
  ]
});
