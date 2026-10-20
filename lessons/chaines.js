(window.PY_LESSONS = window.PY_LESSONS || []).push({
  id: "chaines", num: 12, track: "bases",
  title: { fr: "Les chaînes de caractères", en: "Strings" },
  intro: {
    fr: "Une chaîne de caractères se manipule presque comme une liste de lettres : index, découpage, parcours. Avec une différence importante : on ne peut pas la modifier.",
    en: "A string works almost like a list of letters: indexes, slicing, looping. With one important difference: it can't be changed."
  },
  blocks: [
    { t: "h", fr: "Index et découpage", en: "Indexes and slicing" },
    { t: "code", code: "mot = \"python\"\nprint(mot[0])\nprint(mot[-1])\nprint(mot[1:4])\nprint(mot[::-1])\nprint(len(mot))" },
    { t: "note",
      fr: "Une chaîne ne peut pas être modifiée : <code>mot[0] = \"P\"</code> provoque une erreur. On fabrique une <strong>nouvelle</strong> chaîne, par exemple <code>\"P\" + mot[1:]</code>.",
      en: "A string can't be changed: <code>mot[0] = \"P\"</code> causes an error. Build a <strong>new</strong> string instead, for example <code>\"P\" + mot[1:]</code>." },

    { t: "h", fr: "Parcourir les lettres", en: "Looping over the letters" },
    { t: "p",
      fr: "<code>for c in mot:</code> donne les lettres une par une. On construit souvent une nouvelle chaîne en partant de <code>\"\"</code> (la chaîne vide) et en ajoutant des lettres avec <code>+</code>.",
      en: "<code>for c in mot:</code> gives the letters one by one. You often build a new string starting from <code>\"\"</code> (the empty string) and adding letters with <code>+</code>." },
    { t: "code", code: "mot = \"bonjour\"\nresultat = \"\"\nfor c in mot:\n    resultat = c + resultat\nprint(resultat)" },
    { t: "p",
      fr: "Ici, chaque lettre est ajoutée <em>devant</em> : on obtient le mot à l'envers.",
      en: "Here each letter is added <em>in front</em>: you get the word backwards." },

    { t: "h", fr: "Méthodes utiles", en: "Useful methods" },
    { t: "table",
      head: { fr: ["Méthode", "Exemple", "Résultat"], en: ["Method", "Example", "Result"] },
      rows: [
        ["split()", "\"le chat noir\".split()", "['le', 'chat', 'noir']"],
        ["count(x)", "\"banane\".count(\"a\")", "2"],
        ["replace(a, b)", "\"banane\".replace(\"a\", \"o\")", "'bonone'"],
        ["find(x)", "\"banane\".find(\"n\")", "2"],
        ["upper(), lower()", "\"Usly\".upper()", "'USLY'"]
      ] },

    { t: "h", fr: "Nombres et chaînes", en: "Numbers and strings" },
    { t: "p",
      fr: "<code>str(2026)</code> donne la chaîne <code>\"2026\"</code> : on peut alors parcourir les chiffres d'un nombre. Dans l'autre sens, <code>int(\"7\")</code> donne l'entier 7.",
      en: "<code>str(2026)</code> gives the string <code>\"2026\"</code>, so you can loop over the digits of a number. The other way, <code>int(\"7\")</code> gives the integer 7." },
    { t: "code", code: "n = 2026\nfor c in str(n):\n    print(int(c) * 10)" },

    { t: "h", fr: "Afficher proprement : les f-strings", en: "Clean output: f-strings" },
    { t: "p",
      fr: "Une chaîne précédée de <code>f</code> remplace ce qui est entre accolades par sa valeur. Très pratique pour afficher les termes d'une suite.",
      en: "A string with <code>f</code> in front replaces whatever is in curly braces with its value. Very handy for printing the terms of a sequence." },
    { t: "code", code: "u = 5\nfor n in range(4):\n    print(f\"u({n}) = {u}\")\n    u = 2 * u - 3" }
  ],
  exercises: [
    { t: "predict", id: "chaines-p1",
      title: { fr: "Lettres et morceaux", en: "Letters and pieces" },
      items: [
        { code: "\"chat\"[0]" },
        { code: "\"chat\"[-1]" },
        { code: "\"python\"[1:4]" },
        { code: "\"ab\" + \"cd\"" },
        { code: "3 * \"ha\"" },
        { code: "len(\"bonjour\")" },
        { code: "\"radar\"[::-1]" },
        { code: "\"le chat noir\".split()" },
        { code: "\"banane\".count(\"a\")" },
        { code: "\"banane\".replace(\"a\", \"o\")" },
        { code: "str(2026)[0]" },
        { code: "mot = \"abc\"\nmot[0] = \"z\"",
          note: { fr: "Une chaîne ne peut pas être modifiée : il faut en fabriquer une nouvelle.", en: "A string can't be changed: you have to build a new one." } },
        { code: "n = 3\nf\"u({n}) = {2 * n}\"" }
      ] },
    {
      "t": "fill",
      "id": "chaines-f1",
      "title": {
        "fr": "Les initiales",
        "en": "Initials"
      },
      "prompt": {
        "fr": "Complète la fonction <code>initiales(phrase)</code> qui renvoie les premières lettres des mots de la phrase, en majuscules. Exemple : « intelligence artificielle » donne \"IA\".",
        "en": "Fill in the function <code>initiales(phrase)</code> that returns the first letters of the words in the sentence, in capitals. Example: \"intelligence artificielle\" gives \"IA\"."
      },
      "template": "def initiales(phrase):\n    mots = phrase.{{split()}}\n    res = {{\"\"}}\n    for m in mots:\n        res = res + {{m[0].upper()}}\n    return res",
      "tests": [
        {
          "call": "initiales(\"intelligence artificielle\")",
          "expect": "'IA'"
        },
        {
          "call": "initiales(\"le chat noir\")",
          "expect": "'LCN'"
        },
        {
          "call": "initiales(\"bonjour\")",
          "expect": "'B'"
        }
      ],
      "hints": [
        {
          "fr": "Pour découper une phrase en mots, on utilise la méthode <code>split()</code>. Le résultat part de la chaîne vide.",
          "en": "To cut a sentence into words, use the <code>split()</code> method. The result starts from the empty string."
        },
        {
          "fr": "La première lettre du mot m est <code>m[0]</code>, et <code>.upper()</code> la met en majuscule.",
          "en": "The first letter of the word m is <code>m[0]</code>, and <code>.upper()</code> makes it a capital."
        }
      ]
    },
    { t: "code", id: "chaines-c1",
      title: { fr: "Compter les voyelles", en: "Counting vowels" },
      prompt: { fr: "Écris <code>nb_voyelles(mot)</code> qui renvoie le nombre de voyelles (a, e, i, o, u, y) d'un mot écrit en minuscules sans accent.",
                en: "Write <code>nb_voyelles(mot)</code> that returns how many vowels (a, e, i, o, u, y) a lowercase word without accents contains." },
      starter: { fr: "def nb_voyelles(mot):\n    c = 0\n    ", en: "def nb_voyelles(mot):\n    c = 0\n    " },
      tests: [
        { call: "nb_voyelles(\"bonjour\")", expect: "3" },
        { call: "nb_voyelles(\"rythme\")", expect: "2" },
        { call: "nb_voyelles(\"\")", expect: "0" },
        { call: "nb_voyelles(\"oiseau\")", expect: "5" }
      ],
      require: ["for", "in", "return"],
      hint: { fr: "Pour chaque lettre <code>c</code> du mot, teste <code>if c in \"aeiouy\":</code>.", en: "For each letter <code>c</code> of the word, test <code>if c in \"aeiouy\":</code>." },
      solution: "def nb_voyelles(mot):\n    c = 0\n    for lettre in mot:\n        if lettre in \"aeiouy\":\n            c = c + 1\n    return c" },
    { t: "code", id: "chaines-c2",
      title: { fr: "Palindrome", en: "Palindrome" },
      prompt: { fr: "Un palindrome se lit pareil dans les deux sens (radar, kayak). Écris <code>est_palindrome(mot)</code> qui renvoie <code>True</code> ou <code>False</code>.",
                en: "A palindrome reads the same both ways (radar, kayak). Write <code>est_palindrome(mot)</code> that returns <code>True</code> or <code>False</code>." },
      starter: { fr: "def est_palindrome(mot):\n    ", en: "def est_palindrome(mot):\n    " },
      tests: [
        { call: "est_palindrome(\"radar\")", expect: "True" },
        { call: "est_palindrome(\"kayak\")", expect: "True" },
        { call: "est_palindrome(\"python\")", expect: "False" },
        { call: "est_palindrome(\"a\")", expect: "True" },
        { call: "est_palindrome(\"ab\")", expect: "False" }
      ],
      require: ["return"],
      hint: { fr: "Compare le mot avec le mot à l'envers <code>mot[::-1]</code> : le test renvoie directement True ou False.", en: "Compare the word with the reversed word <code>mot[::-1]</code>: the test itself returns True or False." },
      solution: "def est_palindrome(mot):\n    return mot == mot[::-1]" },
    { t: "code", id: "chaines-c3",
      title: { fr: "Somme des chiffres", en: "Sum of the digits" },
      prompt: { fr: "Écris <code>somme_chiffres(n)</code> qui renvoie la somme des chiffres de l'entier n ≥ 0, en passant par <code>str(n)</code>. Exemple : 2026 donne 2 + 0 + 2 + 6 = 10.",
                en: "Write <code>somme_chiffres(n)</code> that returns the sum of the digits of the integer n ≥ 0, using <code>str(n)</code>. Example: 2026 gives 2 + 0 + 2 + 6 = 10." },
      starter: { fr: "def somme_chiffres(n):\n    ", en: "def somme_chiffres(n):\n    " },
      tests: [
        { call: "somme_chiffres(2026)", expect: "10" },
        { call: "somme_chiffres(7)", expect: "7" },
        { call: "somme_chiffres(99999)", expect: "45" },
        { call: "somme_chiffres(0)", expect: "0" }
      ],
      require: ["str", "int", "return"],
      hint: { fr: "<code>for c in str(n):</code> puis ajoute <code>int(c)</code> à un accumulateur.", en: "<code>for c in str(n):</code> then add <code>int(c)</code> to an accumulator." },
      solution: "def somme_chiffres(n):\n    s = 0\n    for c in str(n):\n        s = s + int(c)\n    return s",
      after: { fr: "Un entier est divisible par 3 quand la somme de ses chiffres l'est : 2026 ne l'est pas (10), 2025 l'est (9).", en: "An integer is divisible by 3 when the sum of its digits is: 2026 isn't (10), 2025 is (9)." } }
  ],
  challenges: [
    { t: "code", id: "chaines-d1",
      title: { fr: "Le chiffre de César", en: "The Caesar cipher" },
      prompt: { fr: "Pour chiffrer un message avec la clé k, Jules César décalait chaque lettre de k rangs dans l'alphabet (après z, on revient à a). 1) Écris <code>cesar(message, k)</code> qui renvoie le message chiffré ; les caractères qui ne sont pas des lettres minuscules (espaces, ponctuation) restent tels quels. 2) Écris <code>dechiffre(message, k)</code> qui retrouve le message d'origine. Interdit : <code>ord</code> et <code>chr</code>.",
                en: "To encrypt a message with the key k, Julius Caesar shifted each letter by k places in the alphabet (after z, back to a). 1) Write <code>cesar(message, k)</code> that returns the encrypted message; characters that aren't lowercase letters (spaces, punctuation) stay as they are. 2) Write <code>dechiffre(message, k)</code> that recovers the original message. Not allowed: <code>ord</code> and <code>chr</code>." },
      starter: { fr: "alphabet = \"abcdefghijklmnopqrstuvwxyz\"\n\ndef cesar(message, k):\n    resultat = \"\"\n    \n\ndef dechiffre(message, k):\n    ", en: "alphabet = \"abcdefghijklmnopqrstuvwxyz\"\n\ndef cesar(message, k):\n    resultat = \"\"\n    \n\ndef dechiffre(message, k):\n    " },
      tests: [
        { call: "cesar(\"abc\", 1)", expect: "'bcd'" },
        { call: "cesar(\"zebre\", 3)", expect: "'cheuh'" },
        { call: "cesar(\"bonjour le monde !\", 13)", expect: "'obawbhe yr zbaqr !'" },
        { call: "dechiffre(\"cheuh\", 3)", expect: "'zebre'" },
        { call: "dechiffre(cesar(\"python pas a pas\", 7), 7)", expect: "'python pas a pas'" }
      ],
      require: ["for", "find", "%", "return"], forbid: ["ord", "chr"],
      hints: [
        { fr: "Pour chaque caractère : trouve sa position dans <code>alphabet</code>, ajoute k, et prends la lettre à la nouvelle position.", en: "For each character: find its position in <code>alphabet</code>, add k, and take the letter at the new position." },
        { fr: "<code>alphabet.find(c)</code> donne la position de c (de 0 à 25), ou −1 si c n'est pas une lettre. La nouvelle position est <code>(position + k) % 26</code> : le reste fait « boucler » après z.", en: "<code>alphabet.find(c)</code> gives the position of c (0 to 25), or −1 if c isn't a letter. The new position is <code>(position + k) % 26</code>: the remainder wraps around after z." },
        { fr: "Dans la boucle <code>for c in message:</code> : si <code>c in alphabet</code>, ajoute <code>alphabet[(alphabet.find(c) + k) % 26]</code> à <code>resultat</code>, sinon ajoute c. Pour déchiffrer, il suffit de décaler de 26 − k : <code>return cesar(message, 26 - k)</code>.", en: "In the loop <code>for c in message:</code>: if <code>c in alphabet</code>, add <code>alphabet[(alphabet.find(c) + k) % 26]</code> to <code>resultat</code>, otherwise add c. To decrypt, just shift by 26 − k: <code>return cesar(message, 26 - k)</code>." }
      ],
      solution: "alphabet = \"abcdefghijklmnopqrstuvwxyz\"\n\ndef cesar(message, k):\n    resultat = \"\"\n    for c in message:\n        if c in alphabet:\n            position = alphabet.find(c)\n            resultat = resultat + alphabet[(position + k) % 26]\n        else:\n            resultat = resultat + c\n    return resultat\n\ndef dechiffre(message, k):\n    return cesar(message, 26 - k)",
      after: { fr: "Avec k = 13, chiffrer deux fois redonne le message de départ : c'est le « ROT13 ».", en: "With k = 13, encrypting twice gives back the original message: that's \"ROT13\"." } },
    { t: "code", id: "chaines-d2",
      title: { fr: "Un mot de passe solide ?", en: "A strong password?" },
      prompt: { fr: "Écris <code>solide(mdp)</code> qui renvoie <code>True</code> si le mot de passe respecte toutes ces règles, <code>False</code> sinon : au moins 8 caractères, au moins un chiffre, au moins une minuscule, au moins une majuscule et au moins un caractère spécial (ni lettre, ni chiffre). Les mots de passe testés n'ont pas d'accents.",
                en: "Write <code>solide(mdp)</code> that returns <code>True</code> if the password follows all these rules, <code>False</code> otherwise: at least 8 characters, at least one digit, at least one lowercase letter, at least one uppercase letter and at least one special character (neither a letter nor a digit). The tested passwords have no accents." },
      starter: { fr: "def solide(mdp):\n    chiffre = False\n    minuscule = False\n    majuscule = False\n    special = False\n    ", en: "def solide(mdp):\n    chiffre = False\n    minuscule = False\n    majuscule = False\n    special = False\n    " },
      tests: [
        { call: "solide(\"Bonjour2026!\")", expect: "True" },
        { call: "solide(\"Ab1!Ab1!\")", expect: "True" },
        { call: "solide(\"bonjour2026!\")", expect: "False", desc: { fr: "\"bonjour2026!\" est refusé : pas de majuscule", en: "\"bonjour2026!\" is rejected: no uppercase letter" } },
        { call: "solide(\"BONJOUR2026?\")", expect: "False", desc: { fr: "\"BONJOUR2026?\" est refusé : pas de minuscule", en: "\"BONJOUR2026?\" is rejected: no lowercase letter" } },
        { call: "solide(\"Bonjour2026\")", expect: "False", desc: { fr: "\"Bonjour2026\" est refusé : pas de caractère spécial", en: "\"Bonjour2026\" is rejected: no special character" } },
        { call: "solide(\"Bonjour!\")", expect: "False", desc: { fr: "\"Bonjour!\" est refusé : pas de chiffre", en: "\"Bonjour!\" is rejected: no digit" } },
        { call: "solide(\"B0n!r\")", expect: "False", desc: { fr: "\"B0n!r\" est refusé : trop court", en: "\"B0n!r\" is rejected: too short" } }
      ],
      require: ["for", "len", "return"],
      hints: [
        { fr: "Les quatre variables booléennes du départ notent ce qu'on a déjà trouvé. Parcours le mot de passe et passe la bonne variable à True pour chaque caractère.", en: "The four boolean variables at the start record what you've already found. Go through the password and set the right variable to True for each character." },
        { fr: "Pour classer un caractère c : <code>c in \"0123456789\"</code> pour un chiffre, <code>c in \"abcdefghijklmnopqrstuvwxyz\"</code> pour une minuscule, la même chaîne en <code>.upper()</code> pour une majuscule, et sinon c'est un caractère spécial (utilise <code>if</code> / <code>elif</code> / <code>else</code>).", en: "To classify a character c: <code>c in \"0123456789\"</code> for a digit, <code>c in \"abcdefghijklmnopqrstuvwxyz\"</code> for a lowercase letter, the same string with <code>.upper()</code> for an uppercase one, and otherwise it's special (use <code>if</code> / <code>elif</code> / <code>else</code>)." },
        { fr: "Après la boucle : <code>return len(mdp) >= 8 and chiffre and minuscule and majuscule and special</code>.", en: "After the loop: <code>return len(mdp) >= 8 and chiffre and minuscule and majuscule and special</code>." }
      ],
      solution: "def solide(mdp):\n    chiffre = False\n    minuscule = False\n    majuscule = False\n    special = False\n    lettres = \"abcdefghijklmnopqrstuvwxyz\"\n    for c in mdp:\n        if c in \"0123456789\":\n            chiffre = True\n        elif c in lettres:\n            minuscule = True\n        elif c in lettres.upper():\n            majuscule = True\n        else:\n            special = True\n    return len(mdp) >= 8 and chiffre and minuscule and majuscule and special" }
  ]
});
