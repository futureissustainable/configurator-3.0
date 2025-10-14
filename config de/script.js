(function () {
  // Universal Images
  let blindsImage =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4341f5b9b2742863461ef_375fa4b4b9988f686d5a21cdfd58a106_Blinds.avif";
  const ventilationImage =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4379c1a20245ff5d081ea_Ventilation.avif";
  const solarImage =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68e35fa1ebd21311eeb0f8ac_Solar%20Pannels.avif";
  const yakisugiIconUrl =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6891f60b4a12d16a97258f9e_8090eb60385f013115bc5f0f57d370f7_Yakisugi%20Modular.avif";
  const lunawoodIconUrl =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6891f60a87823a871ab57392_2ae606770a59238d22e79f8573f47452_Lunawood%20Modular.avif";
  const osbIconUrl =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/682781bf8f050a99912807bd_8168f669e43e0dce4cc4a44c5e6fa5a9_Raw%2BOSB.avif";
  const cashmereIconUrl =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/682781fe749314ab971e22b6_a163b084d45d85d3dc6c99c8ccf00203_Cashmere.avif";
  const hazelnutIconUrl =
    "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/6827826189d9a03adacb10fc_0f99c5082da56476985be14a8d96df3d_Hazelnut.avif";

  const yakisugiImageUrl = ""; // This remains empty to use the main model image as a fallback

  let config = {
    "nomad-24": {
      image:
        "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
      name: "Nomad",
      energy: 34920,
      basePriceText: "Ab 39.800 €",
      options: [
        {
          slug: "semi-finished",
          name: "Ausbauhaus",
          price: 39800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif",
              alt: "Nomad Ausbauhaus oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
              alt: "Nomad Ausbauhaus unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f0499f53b61b42090_24m2%20Nomad%20OSB%204.0.avif",
                icon: osbIconUrl,
                price: 0,
                included: true,
                name: "OSB",
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388b838ef609a824c885_24m2%20Nomad%20OSB%20%2B%20Cashmere%204.0.avif",
                price: 1800,
                included: false,
                name: "Cashmere-Parkett",
                icon: cashmereIconUrl,
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4388ba91d0f79d44ce0d2_24m2%20Nomad%20OSB%20%2B%20Hazelnut%204.0.avif",
                price: 1800,
                included: false,
                name: "Haselnuss-Parkett",
                icon: hazelnutIconUrl,
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 4800,
                included: false,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 2000,
                included: false,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 7800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
        {
          slug: "turnkey",
          name: "Schlüsselfertig",
          price: 59800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif",
              alt: "Nomad Schlüsselfertig oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4339236794245a361e6b9_742d4a56b01c157fcfb78d250a5c284b_24m2%20Nomad%204.1.avif",
              alt: "Nomad Schlüsselfertig unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image: "",
                price: 0,
                included: true,
                name: "OSB",
                icon: osbIconUrl,
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283437fe5ebcf02aa7ab_24m2%20Nomad%20Interior%204.0.avif",
                price: 0,
                included: true,
                name: "Cashmere-Parkett",
                icon: cashmereIconUrl,
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43ad5d75d99a4806d7d4b_24m2%20Nomad%20Interior%20Hazelnut%204.0.avif",
                price: 0,
                included: false,
                name: "Haselnuss-Parkett",
                icon: hazelnutIconUrl,
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283757ec629f34a599c8_24m2%20Nomad%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 0,
                included: true,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 0,
                included: true,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 7800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
      ],
      floorplan: [
        {
          slug: "floorplan-a",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d2244f5d6be3af87aab_24m2%20Floorplan%20A.avif",
          price: 0,
          name: "Grundriss A",
          modal:
            "<h3>24 m² Grundriss A</h3><br><p>Innen: 5,70 m × 3,10 m × 2,50 m</p><p>Außen: 6,40 m × 3,80 m × 3,20 m</p><h4>Räume</h4><p>Schlafzimmer: 14,20 m²</p><p>Bad: 2,65 m²</p><p>Abstellraum / Pantryküche: 0,80 m²</p>",
        },
        {
          slug: "floorplan-b",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c43d22e33276e515d43a8f_24m2%20Floorplan%20B.avif",
          price: 0,
          name: "Grundriss B",
          modal:
            "<h3>24 m² Grundriss B</h3><br><p>Innen: 5,70 m × 3,10 m × 2,50 m</p><p>Außen: 6,40 m × 3,80 m × 3,20 m</p><h4>Räume</h4><p>Schlafzimmer: 14,20 m²</p><p>Bad: 2,65 m²</p><p>Abstellraum / Pantryküche: 0,80 m²</p>",
        },
      ],
    },
    "wanderlust-48": {
      image:
        "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
      name: "Wanderlust",
      energy: 69840,
      basePriceText: "Ab 59.800 €",
      options: [
        {
          slug: "semi-finished",
          name: "Ausbauhaus",
          price: 59800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif",
              alt: "Wanderlust Ausbauhaus oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
              alt: "Wanderlust Ausbauhaus unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c118eb9aa4496812_48m2%20Wanderlust%20OSB%204.0.avif",
                price: 0,
                included: true,
                icon: osbIconUrl,
                name: "OSB",
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834f6342091f39dfedb_48m2%20Wanderlust%20OSB%20%2B%20Cashmere%204.0.avif",
                price: 3800,
                included: false,
                icon: cashmereIconUrl,
                name: "Cashmere-Parkett",
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283416e5d5e698aa09c6_48m2%20Wanderlust%20OSB%20%2B%20Hazelnut%204.0.avif",
                price: 3800,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 7800,
                included: false,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 4000,
                included: false,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 11800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
        {
          slug: "turnkey",
          name: "Schlüsselfertig",
          price: 109800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif",
              alt: "Wanderlust Schlüsselfertig oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283782a535d591653c65_48m2%20Wanderlust%204.0.avif",
              alt: "Wanderlust Schlüsselfertig unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image: "",
                price: 0,
                included: true,
                name: "OSB",
                icon: osbIconUrl,
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282fadd6a68f7235f463_48m2%20Wanderlust%20Interior%20Cashmere%204.0.avif",
                price: 0,
                included: true,
                name: "Cashmere-Parkett",
                icon: cashmereIconUrl,
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f1a20245ff5ca4510_48m2%20Wanderlust%20Interior%20Hazelnut%204.0.avif",
                price: 0,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428347a78da3d6cd218de_48m2%20Wanderlust%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 0,
                included: true,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 0,
                included: true,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 11800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
      ],
      floorplan: [
        {
          slug: "floorplan-a",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c525733fc3797a1ea68b6_48m2%20Floorplan%20A.png",
          price: 0,
          name: "Grundriss A",
          modal:
            "<h3>48 m² Grundriss A</h3><br><p>Innen: 11,80 m × 3,10 m × 2,50 m</p><p>Außen: 12,60 m × 3,80 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 19,90 m²</p><br><p>1. Schlafzimmer: 11,80 m²</p><br><p>1. Bad: 4,50 m²</p>",
        },
        {
          slug: "floorplan-b",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f671a54486d036b53_48m2%20Floorplan%20B.png",
          price: 0,
          name: "Grundriss B",
          modal:
            "<h3>48 m² Grundriss B</h3><br><p>Innen: 11,80 m × 3,10 m × 2,50 m</p><p>Außen: 12,60 m × 3,80 m × 3,20 m</p><h4>Räume</h4><p>1. Schlafzimmer: 11,80 m²</p><p>2. Schlafzimmer: 11,80 m²</p><br><p>1. Bad: 4,50 m²</p><p>2. Bad: 3,50 m²</p><p>Flur: 3,50 m²</p>",
        },
      ],
    },
    "serenity-95": {
      image:
        "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
      name: "Serenity",
      energy: 138225,
      basePriceText: "Ab 109.800 €",
      options: [
        {
          slug: "semi-finished",
          name: "Ausbauhaus",
          price: 109800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif",
              alt: "Serenity Ausbauhaus oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
              alt: "Serenity Ausbauhaus unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834cbf67979df378474_95m2%20Serenity%20OSB%204.0.avif",
                price: 0,
                included: true,
                icon: osbIconUrl,
                name: "OSB",
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4283456778eb848b0ef0a_95m2%20Serenity%20OSB%20%2B%20Cashmere%204.0.avif",
                price: 7800,
                included: false,
                icon: cashmereIconUrl,
                name: "Cashmere-Parkett",
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c8e49bed391084c_95m2%20Serenity%20OSB%20%2B%20Hazelnut%204.0.avif",
                price: 7800,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 9800,
                included: false,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 7000,
                included: false,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 14800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
        {
          slug: "turnkey",
          name: "Schlüsselfertig",
          price: 189800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif",
              alt: "Serenity Schlüsselfertig oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428362a03aef0fc05960f_95m2%20Serenity%204.0.avif",
              alt: "Serenity Schlüsselfertig unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image: "",
                price: 0,
                included: true,
                name: "OSB",
                icon: osbIconUrl,
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f9eb780fb3d07ba0f_95m2%20Serenity%20Cashmere%204.0.avif",
                price: 0,
                included: true,
                name: "Cashmere-Parkett",
                icon: cashmereIconUrl,
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c4282f8de7c20305542612_95m2%20Serenity%20Hazelnut%204.0.avif",
                price: 0,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42834c7a50abaf20e6a83_95m2%20Serenity%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 0,
                included: true,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 0,
                included: true,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 14800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
      ],
      floorplan: [
        {
          slug: "floorplan-a",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514e29f50d2da31e84dc_95m2%20Floorplan%20A.png",
          price: 0,
          name: "Grundriss A",
          modal:
            "<h3>95 m² Grundriss A</h3><br><p>Innen: 11,80 m × 6,80 m × 2,50 m</p><p>Außen: 12,60 m × 7,60 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 19,90 m²</p><br><p>1. Schlafzimmer: 11,80 m²</p><br><p>1. Bad: 4,50 m²</p>",
        },
        {
          slug: "floorplan-b",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fdf7becede16b71e9_95m2%20Floorplan%20B.png",
          price: 0,
          name: "Grundriss B",
          modal:
            "<h3>95 m² Grundriss B</h3><br><p>Innen: 11,80 m × 6,80 m × 2,50 m</p><p>Außen: 12,60 m × 7,60 m × 3,20 m</p><h4>Räume</h4><p>1. Schlafzimmer: 11,80 m²</p><p>2. Schlafzimmer: 11,80 m²</p><br><p>1. Bad: 4,50 m²</p><p>2. Bad: 3,50 m²</p><p>Flur: 3,50 m²</p>",
        },
        {
          slug: "floorplan-c",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff885d32e87f5d5ef_95m2%20Floorplan%20C.png",
          price: 0,
          name: "Grundriss C",
          modal:
            "<h3>95 m² Grundriss C</h3><br><p>Innen: 11,80 m × 6,80 m × 2,50 m</p><p>Außen: 12,60 m × 7,60 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 53,70 m²</p><br><p>1. Schlafzimmer: 13,10 m²</p><br><p>1. Bad: 3,75 m²</p><p>2. Bad: 4,35 m²</p>",
        },
      ],
    },
    "sanctuary-142": {
      image:
        "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
      name: "Sanctuary",
      energy: 175285,
      basePriceText: "Ab 159.800 €",
      options: [
        {
          slug: "semi-finished",
          name: "Ausbauhaus",
          price: 159800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif",
              alt: "Sanctuary Ausbauhaus oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
              alt: "Sanctuary Ausbauhaus unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440552e93c6b2b6549f82_142m2%20Sanctuary%20OSB%204.0.avif",
                price: 0,
                included: true,
                icon: osbIconUrl,
                name: "OSB",
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551ad361e009f1da6e_142m2%20Sanctuary%20OSB%20%2B%20Cashmere%204.0.avif",
                price: 11800,
                included: false,
                icon: cashmereIconUrl,
                name: "Cashmere-Parkett",
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055c519f4722b8ef029_142m2%20Sanctuary%20OSB%20%2B%20Hazelnut%204.0.avif",
                price: 11800,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 9800,
                included: false,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 9000,
                included: false,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 16800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
        {
          slug: "turnkey",
          name: "Schlüsselfertig",
          price: 279800,
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
          images: [
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif",
              alt: "Sanctuary Schlüsselfertig oben",
            },
            {
              src: "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c42836759488180078dc28_142m2%20Sanctuary%204.0.avif",
              alt: "Sanctuary Schlüsselfertig unten",
            },
          ],
          upgrades: [
            [
              {
                slug: "parquet-raw-osb",
                image: "",
                price: 0,
                included: true,
                name: "OSB",
                icon: osbIconUrl,
              },
              {
                slug: "parquet-cashmere",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c440551c75cb12af61eff9_142m2%20Sanctuary%20Interior%20Cashmere%204.0.avif",
                price: 0,
                included: true,
                icon: cashmereIconUrl,
                name: "Cashmere-Parkett",
              },
              {
                slug: "parquet-hazelnut",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c44055256a682dd59e9ad7_142m2%20Sanctuary%20Interior%20Hazelnut%204.0.avif",
                price: 0,
                included: false,
                icon: hazelnutIconUrl,
                name: "Haselnuss-Parkett",
              },
            ],
            [
              {
                slug: "facade-yakisugi",
                image: yakisugiImageUrl,
                icon: yakisugiIconUrl,
                price: 0,
                included: true,
                name: "Yakisugi-Außenfassade",
              },
              {
                slug: "facade-lunawood",
                image:
                  "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/68c428364c5adf6fa2aec1c1_142m2%20Sanctuary%20Lunawood%204.0.avif",
                icon: lunawoodIconUrl,
                price: 0,
                included: true,
                name: "Lunawood-Außenfassade",
              },
            ],
            [
              {
                slug: "ventilation-system",
                image: ventilationImage,
                price: 0,
                included: true,
                name: "Lüftungsanlage + Luftkanäle",
              },
            ],
            [
              {
                slug: "blinds",
                image: blindsImage,
                price: 0,
                included: true,
                name: "Smarte Außenjalousien",
              },
            ],
            [
              {
                slug: "solar-kit",
                image: solarImage,
                price: 16800,
                included: false,
                name: "Solar-Nullenergie-Paket",
              },
            ],
          ],
        },
      ],
      floorplan: [
        {
          slug: "floorplan-a",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514ff7e14cb1b083351b_142m2%20Floorplan%20A.png",
          price: 0,
          name: "Grundriss A",
          modal:
            "<h3>142 m² Grundriss A</h3><br><p>Innen: 11,80 m × 10,60 m × 2,50 m</p><p>Außen: 12,60 m × 11,30 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 62,90 m²</p><br><p>1. Schlafzimmer: 12,40 m²</p><p>2. Schlafzimmer: 12,20 m²</p><p>3. Schlafzimmer: 12,40 m²</p><p>4. Schlafzimmer: 13,10 m²</p><br><p>1. Bad: 3,75 m²</p><p>2. Bad: 4,35 m²</p>",
        },
        {
          slug: "floorplan-b",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514f6966128dbeb27986_142m2%20Floorplan%20B.png",
          price: 0,
          name: "Grundriss B",
          modal:
            "<h3>142 m² Grundriss B</h3><br><p>Innen: 11,80 m × 10,60 m × 2,50 m</p><p>Außen: 12,60 m × 11,30 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 75,30 m²</p><br><p>1. Schlafzimmer: 12,20 m²</p><p>2. Schlafzimmer: 12,40 m²</p><p>3. Schlafzimmer: 13,10 m²</p><br><p>1. Bad: 3,75 m²</p><p>2. Bad: 4,35 m²</p>",
        },
        {
          slug: "floorplan-c",
          image:
            "https://cdn.prod.website-files.com/6801f60a2febd7da21a30b43/689c514fd4d57aa8ff3d75e9_142m2%20Floorplan%20C.png",
          price: 0,
          name: "Grundriss C",
          modal:
            "<h3>142 m² Grundriss C</h3><br><p>Innen: 11,80 m × 10,60 m × 2,50 m</p><p>Außen: 12,60 m × 11,30 m × 3,20 m</p><h4>Räume</h4><p>Wohnen + Küche: 87,50 m²</p><br><p>1. Schlafzimmer: 12,40 m²</p><p>2. Schlafzimmer: 13,10 m²</p><br><p>1. Bad: 3,75 m²</p><p>2. Bad: 4,35 m²</p>",
        },
      ],
    },
  };

  const turnkeyMaterialItemsRaw = `
MODULAR-UPGRADE // TITLE
Neue Generation<split>MODULAR, jetzt perfektioniert mit Passivhaus-zertifizierten Aluminiumrahmen, ultra-organischer Holzfaser-Dämmung, optimiertem und robusterem Tragwerk sowie einer exklusiven Auswahl hochwertiger Oberflächen. Für Komfort, Langlebigkeit und Effizienz auf höchstem Niveau.
TRAGWERK // TITLE
Das MODULAR-Tragwerk<split>Vereint hohe mechanische Festigkeit mit außergewöhnlicher Effizienz und eliminiert Wärmebrücken. Energieeffizienz zertifiziert durch das Passivhaus Institut (Darmstadt) bei 0,15 W/(m²K) und Nachhaltigkeit durch EPD (International).
C24-Holzrahmen BIOBUILDS<split>FSC/PEFC-zertifiziertes Holz, hohe Tragfähigkeit.
300 mm STEICO Holzfaser-Dämmung<split>Organisch, nachhaltig und hocheffizient (λ ≈ 0,036 W/(m·K)), CE-zertifiziert.
ECO OSB 3 Platte (AGEPAN, Deutschland)<split>Frei von Formaldehyd und VOC, Passivhaus-geeignet, CE-zertifiziert.
DWD-Platte (AGEPAN, Deutschland)<split>Diffusionsoffen mit äußerer Luftdichtheit; CE-zertifiziert.
pro clima Smart-Membran<split>Sichert die innere Luftdichtheit mit gesteuertem Dampfdiffusionsabtrag nach außen.
AUSSENOBERFLÄCHEN // TITLE
Hinterlüftete Fassade aus Yakisugi/Lunawood<split>Thermisch modifiziertes Holz, geringe Wartung, guter Brandschutz, langlebig, markante Optik, nachhaltige Herkunft.
Belüftetes Flachdach<split>Hohe Wärmedämmleistung, längere Lebensdauer durch Vermeidung von Feuchte und Überhitzung. Kaum sichtbare Neigung (~5°), abgedichtet mit Premium-Bahn, mind. 10 Jahre Herstellergarantie.
Integrierte Regenwasserableitung<split>Verdeckte Rinnen, unauffällig in die Fassade integriert, bereit für nachhaltige Regenwassernutzung.
FENSTER UND TÜREN AUSSEN // TITLE
Genesis 90 Aluminiumprofile<split>Steif und hocheffizient, Passivhaus-zertifiziert (Uwi ≤ 0,85 W/m²K), CE-zertifiziert.
Dreifachverglasung, laminiert<split>Sehr effizient und sicher (U = 0,50 W/m²K), zusätzliche Schutzlaminierung.
KÜCHE // TITLE
Kücheninstallationen<split>Vorgerüstete Anschlüsse, bereit für Ihre Möbel und Geräte.
TECHNISCHE INSTALLATIONEN // TITLE
Elektrische Installation<split>Vollständiger Verteiler nach strengen EU-Normen. Schalter und Schutzorgane gemäß lokalen Vorschriften, inkl. AFDD-Technologie.
Sanitärinstallation<split>Hochwertige Rohrsysteme und Fittings (PPR/PEX), konform mit lokalen und EU-Vorgaben.
KOMPLETTER INNENAUSBAU // TITLE
Holzlamellendecke + Filz<split>Naturholz und Recycling-Filz; exzellente Akustik.
Glasfasertapete<split>Sehr hohe Reißfestigkeit und Abriebfestigkeit; abwaschbar; modernes Erscheinungsbild.
Dreischichtiges Parkett aus Echtholz<split>Stärke 9–14 mm; FSC/PEFC-zertifiziert; sehr widerstandsfähige Oberfläche.
Schneider-Steckdosen<split>Premium, Made in Germany; CE/VDE-zertifiziert.
INNENTÜREN // TITLE
S10-Vollspantüren<split>CE-zertifiziert; massiver Kern.
KOMPLETTE BADEZIMMER-AUSSTATTUNG // TITLE
Steinverbund-Großformatplatten<split>2,5 × 1,2 m; 100 % wasserfest; sehr langlebig.
Italienisches Design-Waschbecken<split>Premium-Verbundmaterial; ultradünn, modern, langlebig.
Grohe Wand-WC<split>Made in Germany; minimalistisches Design.
Ariston Velis Warmwasserspeicher<split>Schlankes Design; hohe Energieeffizienz.
Walk-in-Dusche<split>In Frankreich entworfen; minimalistisches, modernes Design.
SMART-SYSTEME // TITLE
Stromschiene<split>Flexible Konfiguration für LED und Spots; modernes Erscheinungsbild.
Smarte Außenjalousien<split>>95 % Sonneneinstrahlung abgeschirmt; App-/manuelle Steuerung; zertifiziert vom Passivhaus Institut Darmstadt; CE-zertifiziert.
Genvex Premium Preheat 250<split>Bis zu 95 % Wärmerückgewinnung; integrierte Wärmepumpe zum Heizen und Kühlen.
ZERTIFIKATE UND GARANTIEN // TITLE
Passivhaus-Zertifizierung<split>Ausgestellt vom Passivhaus Institut (Deutschland); bestätigt höchste Energieeffizienz und Komfort.
EPD-Zertifizierung<split>Ausgestellt von EPD International; bestätigt CO₂-negative Bilanz und verantwortungsvolles Bauen.
CE-Kennzeichnung<split>Alle Komponenten entsprechen der EU-Bauprodukteverordnung.
EU-Standardgarantie<split>24 Monate privat. 12 Monate gewerblich. Garantieverlängerung auf Anfrage.
Herstellergarantien<split>Volle Abdeckung gemäß den Garantien der jeweiligen Lieferanten.
HAFTUNGSHINWEIS // TITLE
Technische Leistungswerte<split>Angegebene Werte (inkl. Energieverbrauch) basieren auf standardisierten Passivhaus-Bedingungen. Reale Ergebnisse variieren je nach Klima, Ausrichtung, Größe und Nutzung. Für exakte Details gelten die Berechnungen im Passivhaus-Projektierungspaket (PHPP).
`;
  const semiTurnkeyMaterialItemsRaw = `
MODULAR-UPGRADE // TITLE
Neue Generation<split>MODULAR, jetzt perfektioniert mit Passivhaus-zertifizierten Aluminiumrahmen, ultra-organischer Holzfaser-Dämmung und optimiertem Tragwerk. Für Komfort, Langlebigkeit und Effizienz auf höchstem Niveau.
TRAGWERK // TITLE
Das MODULAR-Tragwerk<split>Vereint hohe mechanische Festigkeit mit außergewöhnlicher Effizienz und eliminiert Wärmebrücken. Energieeffizienz zertifiziert durch das Passivhaus Institut (Darmstadt) bei 0,15 W/(m²K) und Nachhaltigkeit durch EPD (International).
C24-Holzrahmen BIOBUILDS<split>FSC/PEFC-zertifiziertes Holz, hohe Tragfähigkeit.
300 mm STEICO Holzfaser-Dämmung<split>Organisch, nachhaltig und hocheffizient (λ ≈ 0,036 W/(m·K)), CE-zertifiziert.
ECO OSB 3 Platte (AGEPAN, Deutschland)<split>Frei von Formaldehyd und VOC, Passivhaus-geeignet, CE-zertifiziert.
DWD-Platte (AGEPAN, Deutschland)<split>Diffusionsoffen mit äußerer Luftdichtheit; CE-zertifiziert.
pro clima Smart-Membran<split>Sichert die innere Luftdichtheit mit gesteuertem Dampfdiffusionsabtrag nach außen.
AUSSENOBERFLÄCHEN // TITLE
Hinterlüftete Fassade aus Yakisugi/Lunawood<split>Thermisch modifiziertes Holz, geringe Wartung, guter Brandschutz, langlebig, markante Optik, nachhaltige Herkunft.
Belüftetes Flachdach<split>Hohe Wärmedämmleistung, längere Lebensdauer durch Vermeidung von Feuchte und Überhitzung. Kaum sichtbare Neigung (~5°), abgedichtet mit Premium-Bahn, mind. 10 Jahre Herstellergarantie.
Integrierte Regenwasserableitung<split>Verdeckte Rinnen, unauffällig in die Fassade integriert, bereit für nachhaltige Regenwassernutzung.
FENSTER UND TÜREN AUSSEN // TITLE
Genesis 90 Aluminiumprofile<split>Steif und hocheffizient, Passivhaus-zertifiziert (Uwi ≤ 0,85 W/m²K), CE-zertifiziert.
Dreifachverglasung, laminiert<split>Sehr effizient und sicher (U = 0,50 W/m²K), zusätzliche Schutzlaminierung.
KÜCHE // TITLE
Kücheninstallationen<split>Vorgerüstete Anschlüsse, bereit für Ihre Möbel und Geräte.
TECHNISCHE INSTALLATIONEN // TITLE
Elektrische Installation<split>Vollständiger Verteiler nach strengen EU-Normen. Schalter und Schutzorgane gemäß lokalen Vorschriften, inkl. AFDD-Technologie.
Sanitärinstallation<split>Hochwertige Rohrsysteme und Fittings (PPR/PEX), konform mit lokalen und EU-Vorgaben.
ZERTIFIKATE UND GARANTIEN // TITLE
Passivhaus-Zertifizierung<split>Ausgestellt vom Passivhaus Institut (Deutschland); bestätigt höchste Energieeffizienz und Komfort.
EPD-Zertifizierung<split>Ausgestellt von EPD International; bestätigt CO₂-negative Bilanz und verantwortungsvolles Bauen.
CE-Kennzeichnung<split>Alle Komponenten entsprechen der EU-Bauprodukteverordnung.
EU-Standardgarantie<split>24 Monate privat. 12 Monate gewerblich. Garantieverlängerung auf Anfrage.
Herstellergarantien<split>Volle Abdeckung gemäß den Garantien der jeweiligen Lieferanten.
HAFTUNGSHINWEIS // TITLE
Technische Leistungswerte<split>Angegebene Werte (inkl. Energieverbrauch) basieren auf standardisierten Passivhaus-Bedingungen. Reale Ergebnisse variieren je nach Klima, Ausrichtung, Größe und Nutzung. Für exakte Details gelten die Berechnungen im Passivhaus-Projektierungspaket (PHPP).
`;

  function parseItemLine(line) {
    if (!line || line.trim() === "") return null;
    const delimiter = "<split>";
    const delimiterIndex = line.indexOf(delimiter);

    if (delimiterIndex !== -1) {
      const materialPart = line.substring(0, delimiterIndex).trim();
      const charPart = line
        .substring(delimiterIndex + delimiter.length)
        .trim()
        .replace(/<end of materials spec>/g, "")
        .trim();
      if (materialPart) {
        return { material: materialPart, characteristics: charPart };
      }
    }
    const trimmedLine = line
      .replace(/\s*\/\/ TITLE$/, "")
      .trim()
      .replace(/<end of materials spec>/g, "")
      .trim();
    if (trimmedLine) {
      return { material: trimmedLine, characteristics: "" };
    }
    return null;
  }

  function parseMaterialData(rawDataString) {
    const lines = rawDataString.trim().split("\n");
    const items = [];
    let currentSection = "";
    const sectionOrder = [];

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length === 0) return;

      const isAllUpper = trimmedLine === trimmedLine.toUpperCase();
      const hasTitleComment = /\s*\/\/ TITLE$/.test(line);
      const cleanPotentialTitle = trimmedLine
        .replace(/\s*\/\/ TITLE$/, "")
        .trim();

      const isSectionHeader =
        (isAllUpper &&
          cleanPotentialTitle.length > 3 &&
          !cleanPotentialTitle.includes("<split>") &&
          !/\d/.test(cleanPotentialTitle)) ||
        (hasTitleComment &&
          cleanPotentialTitle.length > 0 &&
          !cleanPotentialTitle.includes("<split>"));

      if (isSectionHeader) {
        currentSection = cleanPotentialTitle;
        if (!sectionOrder.includes(currentSection)) {
          sectionOrder.push(currentSection);
        }
      } else if (currentSection || items.length === 0) {
        const parsedItem = parseItemLine(line);
        if (parsedItem && parsedItem.material) {
          let sectionToAssign = currentSection;
          if (
            !sectionToAssign &&
            items.length === 0 &&
            sectionOrder.length === 0 &&
            parsedItem.material.toUpperCase() !==
              cleanPotentialTitle.toUpperCase()
          ) {
          }

          items.push({
            section: sectionToAssign || "General",
            material: parsedItem.material,
            characteristics: parsedItem.characteristics,
          });
          if (
            (sectionToAssign || "General") === "General" &&
            !sectionOrder.includes("General")
          ) {
            sectionOrder.unshift("General");
          }
        }
      }
    });
    return { items, sectionOrder };
  }

  let totalPrice = 0;
  let type = getUrlParameter("SQF_TYPE");
  if (type === null || !config[type]) {
    const validTypes = Object.keys(config);
    type = validTypes.includes("sanctuary-142")
      ? "sanctuary-142"
      : validTypes.length > 0
        ? validTypes[0]
        : "nomad-24";
  }

  let queryArgs = {};

  const stickyImg1 = document.getElementById("stickyImg1");
  const stickyImg2 = document.getElementById("stickyImg2");
  let currentStickyImage = stickyImg1;

  const modalInnerContent = document.querySelector(
    "#modalOverlay .modal-inner",
  );
  const modalOverlay = document.getElementById("modalOverlay");
  const formTabsNodeList = document.querySelectorAll(".form-tab");
  const formTabsArray = Array.from(formTabsNodeList);
  const rightContentElement = document.querySelector(".config .right-content");

  const btn = document.getElementById("finalContinueBtn");
  const box = document.getElementById("priceBox");
  let currentScrollTarget;

  let referralDiscountActive = false;
  const REFERRAL_DISCOUNT_RATE = 0.04;
  const VALID_REFERRAL_CODES = ["BUHNICI", "MATEUS"];

  const SHIPPING_PRICES = {
    "Ab Werk": 0,
    Österreich: 7400,
    Belgien: 9800,
    Bulgarien: 4900,
    Kroatien: 6300,
    Zypern: "Angebot",
    Tschechien: 7100,
    Dänemark: 9000,
    Estland: 9500,
    Finnland: 10900,
    Frankreich: 9500,
    Deutschland: 8500,
    Griechenland: 6800,
    Ungarn: 5300,
    Irland: "Angebot",
    Italien: 7900,
    Lettland: 9000,
    Litauen: 7900,
    Luxemburg: 9300,
    Malta: "Angebot",
    Moldau: 4800,
    Niederlande: 9500,
    Polen: 6600,
    Portugal: 12800,
    Serbien: 5200,
    Slowakei: 6000,
    Slowenien: 6800,
    Spanien: 11700,
    Schweden: 10100,
  };

  function handleStickyBottomAnimation() {
    if (!btn || !box) return;

    let scrollTop, scrollHeight, clientHeight;
    const isDesktop = window.innerWidth > 768;

    if (isDesktop && rightContentElement) {
      scrollTop = rightContentElement.scrollTop;
      scrollHeight = rightContentElement.scrollHeight;
      clientHeight = rightContentElement.clientHeight;
    } else {
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollHeight = document.documentElement.scrollHeight;
      clientHeight = document.documentElement.clientHeight;
    }

    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercent =
      scrollableHeight <= 0 ? 100 : (scrollTop / scrollableHeight) * 100;

    if (scrollPercent >= 70) {
      btn.disabled = false;
      btn.classList.add("active");
      box.classList.add("raise");
    } else {
      btn.disabled = true;
      btn.classList.remove("active");
      box.classList.remove("raise");
    }
  }

  function updateScrollProgressBar() {
    const progressBar = document.getElementById("scroll-progress-bar-bottom");
    if (!progressBar) return;

    let scrollTop, scrollHeight, clientHeight;
    const isDesktop = window.innerWidth > 768;

    if (isDesktop && rightContentElement) {
      scrollTop = rightContentElement.scrollTop;
      scrollHeight = rightContentElement.scrollHeight;
      clientHeight = rightContentElement.clientHeight;
    } else {
      scrollTop = window.scrollY || document.documentElement.scrollTop;
      scrollHeight = document.documentElement.scrollHeight;
      clientHeight = document.documentElement.clientHeight;
    }

    const scrollableHeight = scrollHeight - clientHeight;
    if (scrollableHeight <= 0) {
      progressBar.style.width = "100%";
      return;
    }

    const scrollPercent = (scrollTop / scrollableHeight) * 100;
    const activationThreshold = 85;

    const progressBarWidth = Math.min(
      100,
      (scrollPercent / activationThreshold) * 100,
    );
    progressBar.style.width = `${progressBarWidth}%`;
  }

  function unifiedScrollHandler() {
    handleStickyBottomAnimation();
    updateScrollProgressBar();
  }

  function setupUnifiedScrollListener() {
    const newIsDesktop = window.innerWidth > 768;
    if (currentScrollTarget) {
      currentScrollTarget.removeEventListener("scroll", unifiedScrollHandler);
    }
    currentScrollTarget =
      newIsDesktop && rightContentElement ? rightContentElement : window;
    currentScrollTarget.addEventListener("scroll", unifiedScrollHandler, {
      passive: true,
    });
    setTimeout(unifiedScrollHandler, 250);
  }

  const upgradeRenderConfig = [
    {
      groupIndex: 0,
      queryParam: "SQF_PARQUET",
      type: "parquet",
      defaultName: "Parkett",
    },
    {
      groupIndex: 1,
      queryParam: "SQF_FACADE",
      type: "parquet",
      defaultName: "Fassade",
    },
    {
      groupIndex: 2,
      queryParam: "SQF_VENTILATION",
      type: "checkbox",
      defaultName: "Lüftungsanlage",
    },
    {
      groupIndex: 3,
      queryParam: "SQF_BLINDS",
      type: "checkbox",
      defaultName: "Smarte Außenjalousien",
    },
    {
      groupIndex: 4,
      queryParam: "SQF_SOLAR",
      type: "checkbox",
      defaultName: "Solar-Nullenergie-Paket",
    },
  ];

  const optionTemplate = (
    labelClass,
    inputType,
    inputName,
    inputValue,
    optionName,
    rawPrice,
    context = "upgrades",
    isDisabled = false,
    isChecked = false,
    fullOptionObject = null,
  ) => {
    let priceDisplayHTML = "";
    let effectiveLabelClass = labelClass;
    let inputAttributes = "";

    const isTurnkey =
      queryArgs["SQF_FINISH"] === "turnkey" ||
      (fullOptionObject &&
        fullOptionObject.slug &&
        fullOptionObject.slug.includes("turnkey"));
    const isVentOrBlinds =
      inputValue === "ventilation-system" || inputValue === "blinds";
    let specialPriceText = "";

    if (
      isTurnkey &&
      isVentOrBlinds &&
      (inputName === "SQF_VENTILATION" || inputName === "SQF_BLINDS")
    ) {
      const upgradeData = findUpgradeInCurrentFinish(inputValue);
      if (upgradeData && upgradeData.included && upgradeData.price === 0) {
        specialPriceText = "In Schlüsselfertig enthalten";
        isDisabled = true;
        isChecked = true;
        if (queryArgs[inputName] !== inputValue)
          queryArgs[inputName] = inputValue;
      }
    }

    if (isDisabled) {
      effectiveLabelClass += " disabled-option";
      inputAttributes += " disabled";
    }
    if (isChecked) {
      inputAttributes += " checked";
    }

    if (specialPriceText) {
      priceDisplayHTML = `<span class="option-price">${specialPriceText}</span>`;
    } else if (rawPrice === 0) {
      priceDisplayHTML = `<span class="option-price">Inbegriffen</span>`;
    } else {
      priceDisplayHTML = `<span class="option-price">${formatCurrency(rawPrice)} + MwSt.</span>`;
    }

    if (inputValue === "solar-kit") {
      priceDisplayHTML +=
        '<div style="font-size: 0.8rem; color: #737579; margin-top: 4px; font-weight: 300;">Erzeugt jährlich 60 % mehr Energie, als Ihr Haus verbraucht</div>';
    }

    return `
          <label class="${effectiveLabelClass}">
              <input type="${inputType}" name="${inputName}" price="${rawPrice}" value="${inputValue}" ${inputAttributes} />
              <span class="option-name">${optionName}</span>
              ${priceDisplayHTML}
          </label>
      `;
  };
  const optionsWrapper = (content, className) =>
    `<div class="${className}">${content}</div>`;

  const parquetOption = (
    inputType,
    inputName,
    price,
    inputValue,
    displayName,
    checkboxImage,
    isCheckedByDefault,
  ) => {
    let displayPriceText;
    if (price === 0) {
      displayPriceText = "Inbegriffen";
    } else {
      displayPriceText = `${formatCurrency(price)} + MwSt.`;
    }
    if (inputValue === "solar-kit") {
      priceDisplayHTML +=
        '<div style="font-size: 0.8rem; color: #999; margin-top: 4px; font-weight: 300;">Erzeugt jährlich 60 % mehr Energie, als Ihr Haus verbraucht</div>';
    }
    return `
    <div class="checkbox-container">
        <input id="${inputValue}" class="custom-checkbox" type="${inputType}" name="${inputName}" price="${price}" value="${inputValue}"
                                             data-display-label="${displayName}" data-display-price="${displayPriceText}" ${isCheckedByDefault ? 'checked="checked"' : ""}/>
        <label for="${inputValue}" class="checkbox-label">
            <img src="${checkboxImage || ""}" alt="Icon für ${displayName}" class="checkbox-image" onerror="this.onerror=null; this.src='';">
        </label>
    </div>`;
  };

  function generateNewDetailedMaterialModalContent(houseTypeKey) {
    const houseData = config[houseTypeKey];
    if (!houseData) {
      return "<p>Details nicht verfügbar.</p>";
    }

    const currentFinishSlug = queryArgs["SQF_FINISH"];
    if (!currentFinishSlug) {
      return "<p>Bitte einen Ausbaustandard wählen, um Details zu sehen.</p>";
    }

    const finishData = houseData.options.find(
      (opt) => opt.slug === currentFinishSlug,
    );
    if (!finishData) {
      return "<p>Details zum Ausbaustandard nicht verfügbar.</p>";
    }

    const rawMaterialData =
      currentFinishSlug === "turnkey"
        ? turnkeyMaterialItemsRaw
        : semiTurnkeyMaterialItemsRaw;

    const { items, sectionOrder } = parseMaterialData(rawMaterialData);

    let html = `<img src="${houseData.image}" alt="${houseData.name}" style="width:100%; max-height: 400px; object-fit: cover; margin-bottom: 20px; border-radius: 4px;" onerror="this.onerror=null; this.src='';">`;

    sectionOrder.forEach((sectionName) => {
      const sectionItems = items.filter((item) => item.section === sectionName);
      if (sectionItems.length > 0) {
        html += `<div class="modal-section-title">${sectionName}</div>`;
        sectionItems.forEach((item) => {
          html += `
                      <div class="modal-material-item">
                          <div class="material-name"><p>${item.material}</p></div>
                          <div class="material-chars"><p>${item.characteristics}</p></div>
                      </div>
                  `;
        });
      }
    });

    return html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    queryArgs["SQF_TYPE"] = type;

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      if (key !== "SQF_TYPE") {
        queryArgs[key] = value;
      }
    });

    let houseData = config[type];
    if (!houseData) {
      console.error(
        "Configuration for house type '" +
          type +
          "' not found. Aborting initialization.",
      );
      document.body.innerHTML =
        "<p style='text-align:center;padding:20px;'>Fehler: Die Konfiguration für das ausgewählte Modell konnte nicht geladen werden.</p>";
      return;
    }

    const houseModelNameEl = document.getElementById("houseModelName");
    if (houseModelNameEl) houseModelNameEl.textContent = houseData.name;

    const finalContinueBtn = document.getElementById("finalContinueBtn");
    if (finalContinueBtn) {
      finalContinueBtn.disabled = false;  // Enable immediately
  finalContinueBtn.classList.add("active");
    }

    generateOptions(houseData.options, "step-1", "SQF_FINISH", true, "radio");

    let effectiveFinishSlug = queryArgs["SQF_FINISH"];
    let finishRadio = document.querySelector(
      `.multistep-form input[name="SQF_FINISH"][value="${effectiveFinishSlug}"]`,
    );

    if (!effectiveFinishSlug || !finishRadio) {
      if (houseData.options && houseData.options.length > 0) {
        effectiveFinishSlug = houseData.options[0].slug;
        queryArgs["SQF_FINISH"] = effectiveFinishSlug;
        finishRadio = document.querySelector(
          `.multistep-form input[name="SQF_FINISH"][value="${effectiveFinishSlug}"]`,
        );
      }
    }
    if (finishRadio) {
      finishRadio.checked = true;
    }

    if (queryArgs["SQF_FINISH"] === "turnkey") {
      const turnkeyData = houseData.options.find(
        (opt) => opt.slug === "turnkey",
      );
      if (turnkeyData && turnkeyData.upgrades) {
        turnkeyData.upgrades.forEach((group) => {
          group.forEach((upgrade) => {
            if (
              (upgrade.slug === "ventilation-system" ||
                upgrade.slug === "blinds") &&
              upgrade.included &&
              upgrade.price === 0
            ) {
              if (upgrade.slug === "ventilation-system")
                queryArgs["SQF_VENTILATION"] = upgrade.slug;
              if (upgrade.slug === "blinds")
                queryArgs["SQF_BLINDS"] = upgrade.slug;
            }
          });
        });
      }
    }

    if (effectiveFinishSlug) {
      render_upgrades(effectiveFinishSlug);
    } else {
      const step3Container = document
        .getElementById("step-3")
        ?.querySelector(".options-container");
      if (step3Container) step3Container.innerHTML = "";
    }
    render_floorplan();
    updateModelDescription();

    addSectionSpecificModalButtons();
    setInitialImage();

    addEventListeners();
    setTabTitles();

    referralDiscountActive = false;
    const referralCodeInput = document.getElementById("referral-code-input");
    const initialReferralCodeFromUrl = getUrlParameter("SQF_REFERRAL_CODE");

    if (
      initialReferralCodeFromUrl &&
      VALID_REFERRAL_CODES.includes(initialReferralCodeFromUrl.toUpperCase())
    ) {
      referralDiscountActive = true;
      if (referralCodeInput)
        referralCodeInput.value = initialReferralCodeFromUrl;
    } else {
      const initialReferralFromInput = referralCodeInput
        ? referralCodeInput.value.trim().toUpperCase()
        : "";
      if (
        initialReferralFromInput &&
        VALID_REFERRAL_CODES.includes(initialReferralFromInput)
      ) {
        referralDiscountActive = true;
      } else if (referralCodeInput && initialReferralFromInput) {
        referralDiscountActive = false;
      }
    }

    applyReferralDiscountAndRender();
    render_economy_price();
    updateURL();

    setupUnifiedScrollListener();
    window.addEventListener(
      "resize",
      () => {
        setupUnifiedScrollListener();
      },
      { passive: true },
    );

    const finalContinueBtnRef = document.getElementById("finalContinueBtn");
    if (finalContinueBtnRef) finalContinueBtnRef.textContent = "FORTFAHREN";
    const backBtnElement = document.querySelector(".config .go-back-btn");
    if (backBtnElement) backBtnElement.remove();
  });

  function updateModelDescription() {
    const descriptionEl = document.getElementById("modelDescription");
    if (!descriptionEl) return;

    const modelDescriptions = {
      sanctuary: "142 m² – 4 Schlafzimmer",
      serenity: "95 m² – 3 Schlafzimmer",
      wanderlust: "48 m² – 1 oder 2 Schlafzimmer",
      nomad: "24 m² – 1 Schlafzimmer",
    };

    const modelName = type.split("-")[0];
    const descriptionText = modelDescriptions[modelName] || "";
    descriptionEl.textContent = descriptionText;
  }

  function addSectionSpecificModalButtons() {
    formTabsArray.forEach((tab) => {
      const existingLink = tab.querySelector(".feature-details-link");
      if (existingLink) existingLink.remove();

      const tabId = tab.id;
      let buttonText = "";
      let modalContentProvider = null;
      switch (tabId) {
        case "step-1":
          const currentFinishSlugForLink =
            queryArgs["SQF_FINISH"] ||
            (config[type]?.options.length > 0
              ? config[type].options[0].slug
              : null);
          const finishDataForLink = currentFinishSlugForLink
            ? config[type].options.find(
                (o) => o.slug === currentFinishSlugForLink,
              )
            : null;
          const finishName = finishDataForLink
            ? finishDataForLink.name
            : "Ihrer Auswahl";
          buttonText = `Entdecken Sie, was in ${finishName} enthalten ist`;
          modalContentProvider = () =>
            generateNewDetailedMaterialModalContent(type);
          break;
        case "step-2":
          const currentFloorplanSlug =
            queryArgs["SQF_FLOORPLAN"] || config[type]?.floorplan?.[0]?.slug;
          const floorplanData = currentFloorplanSlug
            ? config[type]?.floorplan?.find(
                (f) => f.slug === currentFloorplanSlug,
              )
            : null;
          const planLetter = floorplanData
            ? floorplanData.name.replace("Grundriss ", "")
            : "A";
          buttonText = `Details zu Grundriss ${planLetter} anzeigen`;
          modalContentProvider = () => {
            const floorplanSlugForModal =
              queryArgs["SQF_FLOORPLAN"] || config[type]?.floorplan?.[0]?.slug;
            const floorplanDataForModal = config[type]?.floorplan?.find(
              (f) => f.slug === floorplanSlugForModal,
            );
            if (!floorplanDataForModal) {
              return "<p>Bitte einen Grundriss auswählen, um Details zu sehen.</p>";
            }
            let modalHtml = `<img src="${floorplanDataForModal.image}" alt="Grundriss ${floorplanDataForModal.name}" style="width:100%; max-height: 400px; object-fit: contain; margin-bottom: 20px; border-radius: 4px; onerror="this.onerror=null; this.src='';">`;
            modalHtml += floorplanDataForModal.modal;
            return modalHtml;
          };
          break;
      }
      if (buttonText && modalContentProvider) {
        const detailsLink = document.createElement("a");
        detailsLink.href = "#";
        detailsLink.className = "feature-details-link";
        detailsLink.textContent = buttonText;
        detailsLink.dataset.tabId = tabId;

        detailsLink.addEventListener("click", (e) => {
          e.preventDefault();
          if (!modalInnerContent || !modalOverlay) return;

          let content = modalContentProvider();
          modalInnerContent.innerHTML = content;
          modalOverlay.style.display = "flex";
        });
        tab.appendChild(detailsLink);
      }
    });
  }

  function setTabTitles() {
    let currentHouseData = config[type];
    if (!currentHouseData) return;
    setTabTitle("Grundriss", "step-2", "floorplanStepTitle");
    setTabTitle("Upgrades", "step-3", "upgradesStepTitle");
    setTabTitle("Empfehlungscode", "step-5-referral", "referralCodeStepTitle");
  }

  function switchToSingleImageView() {
    document.querySelector(".image-wrapper").style.display = "block";
    document.querySelector(".stacked-image-container").style.display = "none";
  }

  function switchToStackedImageView() {
    document.querySelector(".image-wrapper").style.display = "none";
    document.querySelector(".stacked-image-container").style.display = "flex";
  }

  function updateMainDisplayImage() {
    const houseData = config[type];
    if (!houseData) return;

    const currentFinishSlug = queryArgs["SQF_FINISH"];
    const finishData = houseData.options.find(
      (opt) => opt.slug === currentFinishSlug,
    );

    const stackedImgTop = document.getElementById("stackedImgTop");
    const stackedImgBottom = document.getElementById("stackedImgBottom");

    if (
      finishData &&
      (currentFinishSlug === "turnkey" ||
        currentFinishSlug === "semi-finished") &&
      finishData.images &&
      finishData.images.length === 2
    ) {
      switchToStackedImageView();
      stackedImgTop.src = finishData.images[0].src;
      stackedImgTop.alt = finishData.images[0].alt || "Oberes Bild";
      stackedImgBottom.src = finishData.images[1].src;
      stackedImgBottom.alt = finishData.images[1].alt || "Unteres Bild";

      stickyImg1.classList.remove("active-sticky-image");
      stickyImg2.classList.remove("active-sticky-image");
      stickyImg1.classList.remove("object-fit-contain");
      stickyImg2.classList.remove("object-fit-contain");
    } else {
      switchToSingleImageView();
      let singleImageSrc = finishData?.image || houseData.image;
      if (singleImageSrc) {
        crossfadeStickyImage(singleImageSrc, false);
      } else {
        crossfadeStickyImage(houseData.image || "", false);
      }
    }
  }

  function crossfadeStickyImage(newSrc, isFloorplan = false) {
    if (!newSrc || newSrc === "") {
      newSrc = config[type]?.image;
      if (!newSrc || newSrc === "") return;
    }

    if (
      currentStickyImage.src === newSrc &&
      currentStickyImage.classList.contains("active-sticky-image") &&
      ((isFloorplan &&
        currentStickyImage.classList.contains("object-fit-contain")) ||
        (!isFloorplan &&
          !currentStickyImage.classList.contains("object-fit-contain")))
    ) {
      return;
    }

    const imageToLoad =
      currentStickyImage === stickyImg1 ? stickyImg2 : stickyImg1;
    const imageToFadeOut = currentStickyImage;

    if (isFloorplan) {
      imageToLoad.classList.add("object-fit-contain");
    } else {
      imageToLoad.classList.remove("object-fit-contain");
    }

    imageToLoad.onload = () => {
      imageToFadeOut.classList.remove("active-sticky-image");
      imageToLoad.classList.add("active-sticky-image");
      currentStickyImage = imageToLoad;
    };
    imageToLoad.onerror = function () {
      this.onerror = null;
      console.warn(
        "Error loading image:",
        newSrc,
        ". Displaying default image.",
      );
      const width =
        this.naturalWidth > 0
          ? this.naturalWidth
          : this.width > 0
            ? this.width
            : 800;
      const height =
        this.naturalHeight > 0
          ? this.naturalHeight
          : this.height > 0
            ? this.height
            : 600;
      this.src = ``;
      if (isFloorplan) {
        this.classList.add("object-fit-contain");
      } else {
        this.classList.remove("object-fit-contain");
      }
    };
    imageToLoad.src = newSrc;
  }

  function changeImages(value, context = "unknown") {
    const house = config[type];
    if (!house) return;

    if (context === "finish") {
      updateMainDisplayImage();
    } else {
      switchToSingleImageView();
      let selectedOptionData;
      let imageToDisplaySrc = "";
      let applyContainFit = false;

      if (context === "floorplan") {
        selectedOptionData = house.floorplan.find(
          (option) => option.slug === value,
        );
        imageToDisplaySrc = selectedOptionData?.image;
        applyContainFit = true;
      } else {
        selectedOptionData = findUpgrade(
          value,
          queryArgs["SQF_FINISH"] || house.options[0]?.slug,
        );
        if (value === "facade-yakisugi") {
          imageToDisplaySrc = house.image;
        } else {
          imageToDisplaySrc = selectedOptionData?.image;
        }
        applyContainFit = false;
      }

      let finalImageToDisplay = imageToDisplaySrc;
      if (!finalImageToDisplay || finalImageToDisplay === "") {
        finalImageToDisplay = house.image;
        applyContainFit = false;
      }

      if (finalImageToDisplay && finalImageToDisplay !== "") {
        crossfadeStickyImage(finalImageToDisplay, applyContainFit);
      }
    }
  }

  function setInitialImage() {
    updateMainDisplayImage();

    const currentFinishSlug = queryArgs["SQF_FINISH"];
    const finishData = config[type]?.options.find(
      (opt) => opt.slug === currentFinishSlug,
    );

    if (
      !(
        finishData &&
        (currentFinishSlug === "turnkey" ||
          currentFinishSlug === "semi-finished") &&
        finishData.images &&
        finishData.images.length === 2
      )
    ) {
      let imageToShow = config[type]?.image;
      let applyContainFit = false;

      const floorplanSlugFromUrl = queryArgs["SQF_FLOORPLAN"];
      let upgradeImageFromUrl = null;
      const upgradeImageOrder = [
        "SQF_PARQUET",
        "SQF_FACADE",
        "SQF_BLINDS",
        "SQF_VENTILATION",
      ];

      for (const paramKey of upgradeImageOrder) {
        const slug = queryArgs[paramKey];
        if (slug) {
          const finishContextForUpgrade =
            currentFinishSlug || config[type]?.options[0]?.slug;
          let upgradeData = findUpgrade(slug, finishContextForUpgrade);
          if (slug === "facade-yakisugi" && config[type]) {
            upgradeImageFromUrl = config[type].image;
          } else if (
            upgradeData &&
            upgradeData.image &&
            upgradeData.image !== ""
          ) {
            upgradeImageFromUrl = upgradeData.image;
          }
          if (upgradeImageFromUrl) break;
        }
      }

      if (upgradeImageFromUrl) {
        imageToShow = upgradeImageFromUrl;
        applyContainFit = false;
      } else if (floorplanSlugFromUrl) {
        const floorplanData = config[type]?.floorplan?.find(
          (f) => f.slug === floorplanSlugFromUrl,
        );
        if (floorplanData?.image && floorplanData.image !== "") {
          imageToShow = floorplanData.image;
          applyContainFit = true;
        }
      } else if (finishData?.image && finishData.image !== "") {
        imageToShow = finishData.image;
        applyContainFit = false;
      }

      if (imageToShow && imageToShow !== "") {
        switchToSingleImageView();
        crossfadeStickyImage(imageToShow, applyContainFit);
      } else {
        switchToSingleImageView();
        crossfadeStickyImage(config[type]?.image || "", false);
      }
    }
  }

  function render_upgrades(finishSlugValue) {
    let houseConfig = config[type];
    let step3Container = document
      .getElementById("step-3")
      ?.querySelector(".options-container");
    if (!step3Container || !houseConfig) {
      if (step3Container) step3Container.innerHTML = "";
      return;
    }
    step3Container.innerHTML = "";
    if (!finishSlugValue) return;

    let selectedFinishOption = houseConfig.options.find(
      (obj) => obj.slug === finishSlugValue,
    );
    if (!selectedFinishOption || !selectedFinishOption.upgrades) return;

    const isTurnkeySelected = finishSlugValue === "turnkey";

    upgradeRenderConfig.forEach((cfg) => {
      if (
        selectedFinishOption.upgrades[cfg.groupIndex] &&
        selectedFinishOption.upgrades[cfg.groupIndex].length > 0
      ) {
        const originalUpgradeGroup =
          selectedFinishOption.upgrades[cfg.groupIndex];
        let optionsToRender = JSON.parse(JSON.stringify(originalUpgradeGroup));

        if (isTurnkeySelected && cfg.queryParam === "SQF_PARQUET") {
          optionsToRender = optionsToRender.filter(
            (opt) => opt.slug !== "parquet-raw-osb",
          );
        }
        if (!optionsToRender || optionsToRender.length === 0) {
          const existingWrapperClass = cfg.queryParam
            .toLowerCase()
            .replace(/_/g, "-");
          const existingSectionWrapper = step3Container.querySelector(
            `.parquet-section-wrapper.${existingWrapperClass}`,
          );
          if (existingSectionWrapper) existingSectionWrapper.remove();
          const existingRadioGroup = step3Container.querySelector(
            `.radio-group.${existingWrapperClass}`,
          );
          if (existingRadioGroup) existingRadioGroup.remove();
          return;
        }

        if (cfg.type === "parquet") {
          generateParquetOptions(
            optionsToRender,
            "step-3",
            cfg.queryParam,
            true,
            cfg.defaultName,
          );
        } else if (cfg.type === "checkbox" || cfg.type === "radio") {
          generateOptions(
            optionsToRender,
            "step-3",
            cfg.queryParam,
            true,
            cfg.type,
          );
        }

        if (cfg.type === "parquet" || cfg.type === "radio") {
          let currentSelection = queryArgs[cfg.queryParam];
          let inputToSelect = step3Container.querySelector(
            `input[name="${cfg.queryParam}"][value="${currentSelection}"]`,
          );

          if (
            !inputToSelect ||
            (inputToSelect &&
              inputToSelect.closest(".parquet-section-wrapper, .radio-group")
                .offsetParent === null)
          ) {
            const defaultIncludedFree = optionsToRender.find(
              (opt) => opt.included && opt.price === 0,
            );
            const firstOption = optionsToRender[0];
            let defaultSlug = defaultIncludedFree
              ? defaultIncludedFree.slug
              : firstOption
                ? firstOption.slug
                : null;

            if (defaultSlug) {
              inputToSelect = step3Container.querySelector(
                `input[name="${cfg.queryParam}"][value="${defaultSlug}"]`,
              );
              if (
                inputToSelect &&
                (!currentSelection ||
                  !optionsToRender.find((opt) => opt.slug === currentSelection))
              ) {
                queryArgs[cfg.queryParam] = inputToSelect.value;
              }
            }
          }
          if (inputToSelect && !inputToSelect.disabled) {
            inputToSelect.checked = true;
            if (cfg.type === "parquet") {
              updateParquetPriceAndLabel(inputToSelect);
            }
          } else if (
            inputToSelect &&
            inputToSelect.disabled &&
            inputToSelect.checked
          ) {
            queryArgs[cfg.queryParam] = inputToSelect.value;
            if (cfg.type === "parquet") {
              updateParquetPriceAndLabel(inputToSelect);
            }
          }
        } else if (cfg.type === "checkbox") {
          const inputElements = step3Container.querySelectorAll(
            `input[name="${cfg.queryParam}"]`,
          );
          inputElements.forEach((inputEl) => {
            const optionData = optionsToRender.find(
              (opt) => opt.slug === inputEl.value,
            );
            if (
              isTurnkeySelected &&
              (cfg.queryParam === "SQF_VENTILATION" ||
                cfg.queryParam === "SQF_BLINDS")
            ) {
              if (optionData && optionData.included && optionData.price === 0) {
                inputEl.checked = true;
                inputEl.disabled = true;
                queryArgs[cfg.queryParam] = inputEl.value;
              } else {
                inputEl.checked = queryArgs[cfg.queryParam] === inputEl.value;
                inputEl.disabled = false;
              }
            } else if (queryArgs[cfg.queryParam] === inputEl.value) {
              inputEl.checked = true;
            } else if (
              !queryArgs[cfg.queryParam] &&
              optionData &&
              optionData.included &&
              optionData.price === 0 &&
              !isTurnkeySelected
            ) {
              inputEl.checked = true;
              queryArgs[cfg.queryParam] = inputEl.value;
            } else {
              inputEl.checked = false;
            }
          });
        }
      } else {
        const existingWrapperClass = cfg.queryParam
          .toLowerCase()
          .replace(/_/g, "-");
        const existingSectionWrapper = step3Container.querySelector(
          `.parquet-section-wrapper.${existingWrapperClass}`,
        );
        if (existingSectionWrapper) existingSectionWrapper.remove();
        const existingRadioGroup = step3Container.querySelector(
          `.radio-group.${existingWrapperClass}`,
        );
        if (existingRadioGroup) existingRadioGroup.remove();
      }
    });
  }

  function render_floorplan() {
    if (!config[type] || !config[type].floorplan) return;
    let options = config[type].floorplan;
    generateOptions(options, "step-2", "SQF_FLOORPLAN", false, "radio");
    const floorplanFromURL = queryArgs["SQF_FLOORPLAN"];
    let floorplanInput = document.querySelector(
      `input[name="SQF_FLOORPLAN"][value="${floorplanFromURL}"]`,
    );

    if (floorplanInput) {
      floorplanInput.checked = true;
    } else {
      const firstFloorplanRadio = document.querySelector(
        '#step-2 input[name="SQF_FLOORPLAN"]',
      );
      if (firstFloorplanRadio) {
        firstFloorplanRadio.checked = true;
        queryArgs["SQF_FLOORPLAN"] = firstFloorplanRadio.value;
      }
    }
    const floorplanDetailsLink = document.querySelector(
      "#step-2 .feature-details-link",
    );
    if (floorplanDetailsLink) {
      const currentFloorplanSlug = queryArgs["SQF_FLOORPLAN"];
      const floorplanData = config[type]?.floorplan?.find(
        (f) => f.slug === currentFloorplanSlug,
      );
      if (floorplanData && floorplanData.name) {
        floorplanDetailsLink.textContent = `Details zu Grundriss ${floorplanData.name.replace("Grundriss ", "")} anzeigen`;
      } else {
        floorplanDetailsLink.textContent = "Grundrissdetails anzeigen";
      }
    }
  }

  function setTabTitle(tabTitle, tabID, elementId) {
    const targetElement = elementId
      ? document.getElementById(elementId)
      : document.querySelector(`#${tabID} h2`);
    if (targetElement) targetElement.innerHTML = tabTitle;
  }

  function render_economy_price() {
    if (!config[type]) return;
    let savings = config[type].energy;
    savings = formatCurrency(savings);
    const economyWrapper = document.querySelectorAll(".price-box .p2");
    economyWrapper.forEach(
      (economy) =>
        (economy.innerHTML =
          "Geschätzte Energieeinsparung (50 Jahre): " + savings),
    );
  }

  function render_price(
    finalPriceToShow,
    isDiscounted = false,
    originalPriceBeforeDiscount = null,
  ) {
    const priceBoxH4 = document.querySelector(".price-box h4");
    if (!priceBoxH4) return;

    if (
      !config[type] ||
      !config[type].options ||
      config[type].options.length === 0
    ) {
      priceBoxH4.innerHTML =
        "Preis nicht verfügbar <span class='tva-label'>+ MwSt.</span>";
      return;
    }

    let displayHTML;
    const tvaLabelHtml = " <span class='tva-label'>+ MwSt.</span>";

    if (
      isDiscounted &&
      originalPriceBeforeDiscount !== null &&
      originalPriceBeforeDiscount > finalPriceToShow
    ) {
      const formattedOldPrice = formatCurrency(originalPriceBeforeDiscount);
      const formattedNewPrice = formatCurrency(finalPriceToShow);
      displayHTML = `<span class="old-price">${formattedOldPrice}</span><span class="new-price">${formattedNewPrice}</span>`;
    } else {
      const formattedPrice = formatCurrency(finalPriceToShow);
      displayHTML = `<span class="new-price">${formattedPrice}</span>`;
    }
    priceBoxH4.innerHTML = displayHTML + tvaLabelHtml;
  }

  function applyReferralDiscountAndRender() {
    const originalPrice = sumCheckedPrices();
    const discountMessageEl = document.getElementById("discount-message");
    let finalPrice = originalPrice;
    let isDiscounted = false;

    if (referralDiscountActive) {
      finalPrice = originalPrice * (1 - REFERRAL_DISCOUNT_RATE);
      isDiscounted = true;
      if (discountMessageEl) {
        discountMessageEl.style.display = "block";
      }
    } else {
      if (discountMessageEl) {
        discountMessageEl.style.display = "none";
      }
    }

    render_price(finalPrice, isDiscounted, originalPrice);

    queryArgs["SQF_PRICE"] = Math.round(finalPrice);
  }

  function generateOptions(
    options,
    tabID,
    inputName,
    append = false,
    inputType = "radio",
  ) {
    let tab = document.getElementById(tabID);
    if (!tab) return;
    let container = tab.querySelector(".options-container");
    if (!container) return;

    if (!options || options.length === 0) {
      if (!append) {
        const existingGroup = container.querySelector(
          `.radio-group.${inputName.toLowerCase().replace(/_/g, "-")}`,
        );
        if (existingGroup) existingGroup.remove();
      }
      return;
    }

    let optionString = "";
    const isTurnkey = queryArgs["SQF_FINISH"] === "turnkey";

    options.forEach((option) => {
      let isDisabled = false;
      let isChecked = queryArgs[inputName] === option.slug;

      const context =
        inputName === "SQF_FINISH"
          ? "finishes"
          : inputName === "SQF_FLOORPLAN"
            ? "floorplans"
            : "upgrades";

      if (
        isTurnkey &&
        (option.slug === "ventilation-system" || option.slug === "blinds") &&
        (inputName === "SQF_VENTILATION" || inputName === "SQF_BLINDS")
      ) {
        const upgradeData = findUpgradeInCurrentFinish(option.slug);
        if (upgradeData && upgradeData.included && upgradeData.price === 0) {
          isDisabled = true;
          isChecked = true;
        }
      } else if (
        inputName === "SQF_VENTILATION" ||
        inputName === "SQF_BLINDS"
      ) {
        isChecked = queryArgs[inputName] === option.slug;
      }
      optionString += optionTemplate(
        "radio-card",
        inputType,
        inputName,
        option.slug,
        option.name,
        option.price,
        context,
        isDisabled,
        isChecked,
        option,
      );
    });

    let wrapperClass =
      "radio-group " +
      inputName.toLowerCase().replace(/_/g, "-") +
      (inputName === "SQF_FINISH" ? " sqf-finish" : "");
    if (inputType === "checkbox") wrapperClass += " checkbox-group";

    let fullGroupHTML = optionsWrapper(optionString, wrapperClass);

    if (optionString.trim() !== "") {
      if (!append) {
        const existingGroup = container.querySelector(
          `div.${inputName.toLowerCase().replace(/_/g, "-")}`,
        );
        if (existingGroup) {
          existingGroup.remove();
        }
      }
      container.insertAdjacentHTML("beforeend", fullGroupHTML);
    } else if (!append) {
      const existingGroup = container.querySelector(
        `div.${inputName.toLowerCase().replace(/_/g, "-")}`,
      );
      if (existingGroup) existingGroup.remove();
    }
  }

  function generateParquetOptions(
    options,
    tabID,
    inputName,
    append = false,
    groupDefaultName = "Options",
  ) {
    let tab = document.getElementById(tabID);
    if (!tab) return;
    let container = tab.querySelector(".options-container");
    if (!container) return;

    if (!options || options.length === 0) {
      const existingWrapperClass = inputName.toLowerCase().replace(/_/g, "-");
      const existingSectionWrapper = container.querySelector(
        `.parquet-section-wrapper.${existingWrapperClass}`,
      );
      if (existingSectionWrapper) {
        existingSectionWrapper.remove();
      }
      return;
    }

    let optionString = "";
    let firstName = "",
      firstPriceText = "";
    let defaultCheckedSlug = queryArgs[inputName];

    if (
      !defaultCheckedSlug ||
      !options.find((opt) => opt.slug === defaultCheckedSlug)
    ) {
      const includedFreeOption = options.find(
        (opt) => opt.included && opt.price === 0,
      );
      defaultCheckedSlug = includedFreeOption
        ? includedFreeOption.slug
        : options.length > 0
          ? options[0].slug
          : null;
    }

    if (defaultCheckedSlug && queryArgs[inputName] !== defaultCheckedSlug) {
      queryArgs[inputName] = defaultCheckedSlug;
    }

    options.forEach((option) => {
      let isDefaultChecked = option.slug === defaultCheckedSlug;
      optionString += parquetOption(
        "radio",
        inputName,
        option.price,
        option.slug,
        option.name,
        option.icon,
        isDefaultChecked,
      );
      if (isDefaultChecked) {
        firstName = option.name;
        if (option.price === 0 && option.included) {
          firstPriceText = "Inbegriffen";
        } else if (option.price === 0) {
          firstPriceText = "Inbegriffen";
        } else {
          firstPriceText = `${formatCurrency(option.price)} + MwSt.`;
        }
      }
    });

    if (optionString.trim() !== "") {
      const sectionWrapperClass =
        "parquet-section-wrapper " + inputName.toLowerCase().replace(/_/g, "-");
      const existingOldWrapper = container.querySelector(
        `.${sectionWrapperClass.replace(/\s/g, ".")}`,
      );
      if (existingOldWrapper && !append) {
        existingOldWrapper.remove();
      }

      const parquetSectionWrapper = document.createElement("div");
      parquetSectionWrapper.className = sectionWrapperClass;
      parquetSectionWrapper.dataset.groupName = inputName;

      const groupTitleElement = document.createElement("h4");
      groupTitleElement.textContent =
        groupDefaultName || inputName.replace("SQF_", "").replace(/_/g, " ");
      groupTitleElement.style.marginBottom = "10px";

      let parquetIconsGroupHTML = optionsWrapper(
        optionString,
        "radio-group parquet-checkboxes " +
          inputName.toLowerCase().replace(/_/g, "-"),
      );
      let displayLabelId = `display-label-${inputName}`;
      let displayPriceId = `display-price-${inputName}`;
      let parquetLabelsHTML = `<div class="p-wrapper"><p id="${displayLabelId}">${firstName}</p><p id="${displayPriceId}" class="option-price">${firstPriceText}</p></div>`;

      parquetSectionWrapper.appendChild(groupTitleElement);
      parquetSectionWrapper.insertAdjacentHTML(
        "beforeend",
        parquetIconsGroupHTML + parquetLabelsHTML,
      );

      if (append) {
        container.appendChild(parquetSectionWrapper);
      } else {
        container.appendChild(parquetSectionWrapper);
      }
    }
  }

  function updateParquetPriceAndLabel(target) {
    const displayLabelText = target.getAttribute("data-display-label");
    const displayPriceText = target.getAttribute("data-display-price");
    const inputName = target.name;
    const wrapper = target.closest(".parquet-section-wrapper");
    if (!wrapper) return;
    const labelEl = wrapper.querySelector(`#display-label-${inputName}`);
    const priceEl = wrapper.querySelector(`#display-price-${inputName}`);
    if (labelEl) labelEl.textContent = displayLabelText || "";
    if (priceEl) priceEl.textContent = displayPriceText || "";
  }

  function addEventListeners() {
    const form = document.querySelector(".multistep-form");
    if (form) {
      form.addEventListener("change", (event) => {
        const target = event.target;
        if (
          (target.tagName === "INPUT" || target.tagName === "SELECT") &&
          !target.disabled
        ) {
          if (target.name === "SQF_MODEL_SELECT") return;

          const currentFormTab = target.closest(".form-tab");
          if (currentFormTab) removeNotification(currentFormTab);

          let optionContext = "upgrade";
          if (target.name === "SQF_FINISH") optionContext = "finish";
          else if (target.name === "SQF_FLOORPLAN") optionContext = "floorplan";

          if (target.name === "SQF_FINISH") {
            queryArgs["SQF_FINISH"] = target.value;
            const upgradeParamsToClear = [
              "SQF_PARQUET",
              "SQF_FACADE",
              "SQF_VENTILATION",
              "SQF_BLINDS",
            ];
            upgradeParamsToClear.forEach((key) => {
              delete queryArgs[key];
            });
            if (queryArgs["SQF_FINISH"] === "turnkey") {
              const houseData = config[type];
              const turnkeyData = houseData.options.find(
                (opt) => opt.slug === "turnkey",
              );
              if (turnkeyData && turnkeyData.upgrades) {
                turnkeyData.upgrades.forEach((group) => {
                  group.forEach((upgrade) => {
                    if (
                      (upgrade.slug === "ventilation-system" ||
                        upgrade.slug === "blinds") &&
                      upgrade.included &&
                      upgrade.price === 0
                    ) {
                      if (upgrade.slug === "ventilation-system")
                        queryArgs["SQF_VENTILATION"] = upgrade.slug;
                      if (upgrade.slug === "blinds")
                        queryArgs["SQF_BLINDS"] = upgrade.slug;
                    }
                  });
                });
              }
            }
            render_upgrades(target.value);

            const finishDetailsLink = document.querySelector(
              "#step-1 .feature-details-link",
            );
            const newFinishDataForLink = config[type].options.find(
              (o) => o.slug === target.value,
            );
            if (finishDetailsLink && newFinishDataForLink) {
              finishDetailsLink.textContent = `Entdecken Sie, was in ${newFinishDataForLink.name} enthalten ist`;
            }
          } else if (target.classList.contains("custom-checkbox")) {
            updateParquetPriceAndLabel(target);
          } else if (target.name === "SQF_FLOORPLAN") {
            const floorplanData = config[type].floorplan.find(
              (f) => f.slug === target.value,
            );
            const floorplanDetailsLink = document.querySelector(
              "#step-2 .feature-details-link",
            );
            if (floorplanDetailsLink && floorplanData && floorplanData.name) {
              floorplanDetailsLink.textContent = `Details zu Grundriss ${floorplanData.name.replace("Grundriss ", "")} anzeigen`;
            } else if (floorplanDetailsLink) {
              floorplanDetailsLink.textContent = "Grundrissdetails anzeigen";
            }
            updateModelDescription();
          }

          if (
            target.type === "checkbox" &&
            (target.name === "SQF_VENTILATION" || target.name === "SQF_BLINDS")
          ) {
            if (target.checked) {
              queryArgs[target.name] = target.value;
            } else {
              const isTurnkey = queryArgs["SQF_FINISH"] === "turnkey";
              const upgradeInfo = findUpgradeInCurrentFinish(target.value);
              if (
                !(
                  isTurnkey &&
                  upgradeInfo &&
                  upgradeInfo.included &&
                  upgradeInfo.price === 0
                )
              ) {
                delete queryArgs[target.name];
              }
            }
          } else if (target.type === "checkbox") {
            if (target.checked) queryArgs[target.name] = target.value;
            else delete queryArgs[target.name];
          } else {
            queryArgs[target.name] = target.value;
          }

          changeImages(target.value, optionContext);
          applyReferralDiscountAndRender();
          updateURL();
        }
      });

      form.addEventListener("click", (event) => {
        let target = event.target;
        let inputElement = null;

        if (target.tagName === "LABEL") {
          const forId = target.getAttribute("for");
          if (forId) inputElement = document.getElementById(forId);
          else
            inputElement = target.querySelector(
              'input[type="radio"], input[type="checkbox"]',
            );
        } else if (target.closest("label")) {
          const parentLabel = target.closest("label");
          const forId = parentLabel.getAttribute("for");
          if (forId) inputElement = document.getElementById(forId);
          else
            inputElement = parentLabel.querySelector(
              'input[type="radio"], input[type="checkbox"]',
            );
        } else if (
          target.tagName === "INPUT" &&
          (target.type === "radio" || target.type === "checkbox")
        ) {
          inputElement = target;
        }

        if (inputElement && inputElement.checked && !inputElement.disabled) {
          let optionContext = "upgrade";
          if (inputElement.name === "SQF_FINISH") optionContext = "finish";
          else if (inputElement.name === "SQF_FLOORPLAN")
            optionContext = "floorplan";

          changeImages(inputElement.value, optionContext);
        }
      });
    }

    const referralInput = document.getElementById("referral-code-input");
    if (referralInput) {
      referralInput.addEventListener("input", () => {
        const enteredCode = referralInput.value.trim().toUpperCase();
        referralDiscountActive = VALID_REFERRAL_CODES.includes(enteredCode);
        applyReferralDiscountAndRender();
        updateURL();
      });
    }

    const shippingSelect = document.getElementById("shipping-country-select");
    const zipCodeContainer = document.getElementById("zip-code-container");
    const zipCodeInput = document.getElementById("zip-code-input");
    const shippingPriceDisplay = document.getElementById(
      "shipping-price-display",
    );

    if (shippingSelect) {
      shippingSelect.addEventListener("change", (event) => {
        queryArgs["SQF_SHIPPING_COUNTRY"] = event.target.value;

        if (
          event.target.value &&
          event.target.value !== "" &&
          event.target.value !== "Ab Werk"
        ) {
          zipCodeContainer.style.display = "block";
          zipCodeInput.value = "";
          shippingPriceDisplay.textContent = "";
        } else {
          zipCodeContainer.style.display = "none";
        }
        updateURL();
      });

      const shippingFromURL = getUrlParameter("SQF_SHIPPING_COUNTRY");
      if (shippingFromURL) {
        shippingSelect.value = shippingFromURL;
        queryArgs["SQF_SHIPPING_COUNTRY"] = shippingFromURL;
        if (shippingFromURL && shippingFromURL !== "Ab Werk") {
          zipCodeContainer.style.display = "block";
        }
      } else {
        const defaultCountry = "Deutschland";
        shippingSelect.value = defaultCountry;
        queryArgs["SQF_SHIPPING_COUNTRY"] = defaultCountry;
        zipCodeContainer.style.display = "block";
        updateURL();
      }
    }

    if (zipCodeInput) {
      zipCodeInput.addEventListener("input", () => {
        const zipValue = zipCodeInput.value.trim();
        const selectedCountry = queryArgs["SQF_SHIPPING_COUNTRY"];

        if (
          zipValue.length >= 3 &&
          selectedCountry &&
          SHIPPING_PRICES[selectedCountry] !== undefined
        ) {
          let basePrice = SHIPPING_PRICES[selectedCountry];

          if (basePrice === "Angebot") {
            shippingPriceDisplay.textContent = "Geschätzt im Angebot";
          } else {
            let multiplier = 1;
            if (type === "serenity-95") multiplier = 2;
            else if (type === "sanctuary-142") multiplier = 3;

            const finalPrice = basePrice * multiplier;
            shippingPriceDisplay.textContent = `ca. ${formatCurrency(finalPrice)}`;
          }
        } else {
          shippingPriceDisplay.textContent = "";
        }

        queryArgs["SQF_ZIP_CODE"] = zipValue;
        updateURL();
      });

      const zipFromURL = getUrlParameter("SQF_ZIP_CODE");
      if (zipFromURL) {
        zipCodeInput.value = zipFromURL;
        zipCodeInput.dispatchEvent(new Event("input"));
      }
    }

    if (modalOverlay)
      modalOverlay.addEventListener("click", (evt) => {
        if (evt.target === modalOverlay) modalOverlay.style.display = "none";
      });
    document.body.addEventListener("click", function (event) {
      if (event.target && event.target.id === "closeModal" && modalOverlay)
        modalOverlay.style.display = "none";
    });

 const finalContinueBtnRef = document.getElementById("finalContinueBtn");
    if (finalContinueBtnRef) {
      finalContinueBtnRef.addEventListener("click", () => {
        let allValid = true;

        if (!queryArgs["SQF_FINISH"]) {
          showNotification(
            document.getElementById("step-1"),
            "Bitte einen Ausbaustandard wählen.",
          );
          allValid = false;
        }

        if (!queryArgs["SQF_FLOORPLAN"]) {
          showNotification(
            document.getElementById("step-2"),
            "Bitte einen Grundriss wählen.",
          );
          allValid = false;
        }

        const upgradeContainer = document.getElementById("step-3");
        if (upgradeContainer) {
          const visibleRadioUpgradeInputs = upgradeContainer.querySelectorAll(
            '.options-container .radio-group:not([style*="display: none"]) input[type="radio"], .options-container .parquet-checkboxes input[type="radio"]',
          );
          const uniqueVisibleRadioNames = new Set();

          visibleRadioUpgradeInputs.forEach((radio) => {
            const parentGroup = radio.closest(
              ".radio-group, .parquet-checkboxes",
            );
            const sectionWrapper = radio.closest(".parquet-section-wrapper");
            if (
              (parentGroup && parentGroup.offsetParent !== null) ||
              (sectionWrapper && sectionWrapper.offsetParent !== null)
            ) {
              if (
                !radio.name.includes("SQF_VENTILATION") &&
                !radio.name.includes("SQF_BLINDS")
              ) {
                uniqueVisibleRadioNames.add(radio.name);
              }
            }
          });

          uniqueVisibleRadioNames.forEach((name) => {
            const isRenderedRadioOrParquet = upgradeRenderConfig.some(
              (cfg) =>
                cfg.queryParam === name &&
                (cfg.type === "radio" || cfg.type === "parquet"),
            );
            if (
              isRenderedRadioOrParquet &&
              !queryArgs[name] &&
              !document.querySelector(`input[name="${name}"]:checked`)
            ) {
              const problemGroup = document
                .querySelector(`input[name="${name}"]`)
                .closest(".parquet-section-wrapper, .radio-group");
              const titleElement = problemGroup
                ? problemGroup.querySelector("h4")
                : null;
              const groupTitle = titleElement
                ? titleElement.textContent
                : name.replace("SQF_", "").replace(/_/g, " ");
              showNotification(
                document.getElementById("step-3"),
                `Bitte eine Auswahl für ${groupTitle} treffen.`,
              );
              allValid = false;
            }
          });
        }

        if (!allValid) {
          const firstInvalid = document
            .querySelector(".notification")
            ?.closest(".form-tab");
          if (firstInvalid) {
            if (rightContentElement && window.innerWidth > 768) {
              rightContentElement.scrollTo({
                top: firstInvalid.offsetTop - 20,
                behavior: "smooth",
              });
            } else {
              window.scrollTo({
                top:
                  firstInvalid.getBoundingClientRect().top +
                  window.scrollY -
                  70,
                behavior: "smooth",
              });
            }
          }
          return;
        }

        const targetUrlParams = new URLSearchParams();
        const targetOrderedKeys = [
          "SQF_TYPE",
          "SQF_FINISH",
          "SQF_FLOORPLAN",
          "SQF_PARQUET",
          "SQF_FACADE",
          "SQF_VENTILATION",
          "SQF_BLINDS",
          "SQF_PRICE",
        ];
        targetOrderedKeys.forEach((key) => {
          if (
            queryArgs[key] !== null &&
            queryArgs[key] !== undefined &&
            String(queryArgs[key]).trim() !== ""
          ) {
            targetUrlParams.set(key, queryArgs[key]);
          }
        });

        for (const key in queryArgs) {
          if (
            !orderedKeys.includes(key) &&
            queryArgs[key] !== null &&
            queryArgs[key] !== undefined &&
            String(queryArgs[key]).trim() !== ""
          ) {
            if (
              key !== "SQF_REFERRAL_CODE" &&
              key !== "SQF_REFERRAL_NAME" &&
              key !== "SQF_REFERRAL_VALID"
            ) {
              targetUrlParams.set(key, queryArgs[key]);
            }
          }
        }

        const currentReferralCodeInput = document.getElementById(
          "referral-code-input",
        );
        const currentReferralCodeValue = currentReferralCodeInput
          ? currentReferralCodeInput.value.trim()
          : "";

        if (currentReferralCodeValue) {
          const enteredCodeUpper = currentReferralCodeValue.toUpperCase();
          if (
            referralDiscountActive &&
            VALID_REFERRAL_CODES.includes(enteredCodeUpper)
          ) {
            const capitalizedName =
              currentReferralCodeValue.charAt(0).toUpperCase() +
              currentReferralCodeValue.slice(1).toLowerCase();
            targetUrlParams.set("SQF_REFERRAL_NAME", capitalizedName);
            targetUrlParams.set("SQF_REFERRAL_VALID", "yes4");
          }
        }

        window.location.href =
          "/design/form/" +
          (targetUrlParams.toString() ? "?" + targetUrlParams.toString() : "");
      });
    }

    const leftImagesPanel = document.querySelector(".config .left-images");
    if (leftImagesPanel && rightContentElement && window.innerWidth > 768) {
      leftImagesPanel.addEventListener(
        "wheel",
        function (event) {
          if (
            rightContentElement.scrollHeight > rightContentElement.clientHeight
          ) {
            rightContentElement.scrollTop += event.deltaY;
            event.preventDefault();
          }
        },
        { passive: false },
      );
    }
  }

  function showNotification(sectionElementOrId, text = "") {
    let sectionElement =
      typeof sectionElementOrId === "string"
        ? document.getElementById(sectionElementOrId)
        : sectionElementOrId;
    if (!sectionElement) return;
    removeNotification(sectionElement);
    let notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = text || "Bitte eine Auswahl treffen.";

    const optionsContainer = sectionElement.querySelector(".options-container");
    if (optionsContainer) {
      const firstGroup = optionsContainer.querySelector(
        ".radio-group, .parquet-section-wrapper, .checkbox-group, h4, .custom-text-input, .model-select-wrapper",
      );
      if (firstGroup) {
        optionsContainer.insertBefore(notification, firstGroup);
      } else {
        optionsContainer.prepend(notification);
      }
    } else {
      sectionElement.prepend(notification);
    }
  }

  function removeNotification(sectionElementOrId) {
    let sectionElement =
      typeof sectionElementOrId === "string"
        ? document.getElementById(sectionElementOrId)
        : sectionElementOrId;
    if (!sectionElement) return;
    const notification = sectionElement.querySelector(".notification");
    if (notification) notification.remove();
  }

  function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || null;
  }

  function formatCurrency(amount) {
    if (typeof amount === "string" && isNaN(parseFloat(amount))) return amount;
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  function sumCheckedPrices() {
    let sum = 0;
    const selectedFinishSlug = queryArgs["SQF_FINISH"];
    if (selectedFinishSlug && config[type]) {
      const finishData = config[type].options.find(
        (opt) => opt.slug === selectedFinishSlug,
      );
      if (finishData && typeof finishData.price === "number") {
        sum += finishData.price;
      }
    }

    const upgradeKeys = [
      "SQF_PARQUET",
      "SQF_FACADE",
      "SQF_VENTILATION",
      "SQF_BLINDS",
      "SQF_SOLAR",
    ];
    upgradeKeys.forEach((key) => {
      const selectedUpgradeSlug = queryArgs[key];
      if (selectedUpgradeSlug) {
        const upgradeData = findUpgradeInCurrentFinish(selectedUpgradeSlug);
        const inputElement = document.querySelector(
          `.multistep-form input[name="${key}"][value="${selectedUpgradeSlug}"]`,
        );
        if (
          upgradeData &&
          typeof upgradeData.price === "number" &&
          upgradeData.price > 0 &&
          inputElement &&
          !inputElement.disabled
        ) {
          sum += upgradeData.price;
        }
      }
    });
    return sum;
  }

  function updateURL() {
    const params = new URLSearchParams();
    const orderedKeys = [
      "SQF_TYPE",
      "SQF_FINISH",
      "SQF_FLOORPLAN",
      "SQF_PARQUET",
      "SQF_FACADE",
      "SQF_VENTILATION",
      "SQF_BLINDS",
      "SQF_PRICE",
    ];
    orderedKeys.forEach((key) => {
      if (
        queryArgs[key] !== null &&
        queryArgs[key] !== undefined &&
        String(queryArgs[key]).trim() !== ""
      ) {
        params.set(key, queryArgs[key]);
      }
    });
    for (const key in queryArgs) {
      if (
        !orderedKeys.includes(key) &&
        queryArgs[key] !== null &&
        queryArgs[key] !== undefined &&
        String(queryArgs[key]).trim() !== ""
      ) {
        params.set(key, queryArgs[key]);
      }
    }

    const referralCodeInputEl = document.getElementById("referral-code-input");
    const referralCodeValueFromInput = referralCodeInputEl
      ? referralCodeInputEl.value.trim()
      : "";

    if (
      referralDiscountActive &&
      referralCodeValueFromInput &&
      VALID_REFERRAL_CODES.includes(referralCodeValueFromInput.toUpperCase())
    ) {
      params.set("SQF_REFERRAL_CODE", referralCodeValueFromInput.toUpperCase());
    } else {
      params.delete("SQF_REFERRAL_CODE");
    }

    const newSearch = params.toString() ? "?" + params.toString() : "";
    if (window.location.search !== newSearch) {
      history.replaceState(null, "", window.location.pathname + newSearch);
    }
  }

  function findUpgrade(slug, finishContextSlug) {
    let finishSlugToSearch = finishContextSlug || queryArgs["SQF_FINISH"];
    if (!finishSlugToSearch || !config[type] || !config[type].options)
      return null;
    const currentFinishOption = config[type].options.find(
      (opt) => opt.slug === finishSlugToSearch,
    );
    if (!currentFinishOption || !currentFinishOption.upgrades) return null;

    for (let upgradeGroup of currentFinishOption.upgrades) {
      if (Array.isArray(upgradeGroup)) {
        const upgrade = upgradeGroup.find((item) => item.slug === slug);
        if (upgrade) return upgrade;
      }
    }
    return null;
  }

  function findUpgradeInCurrentFinish(upgradeSlug) {
    let currentFinishSlug =
      queryArgs["SQF_FINISH"] ||
      (config[type] && config[type].options.length > 0
        ? config[type].options[0].slug
        : null);
    if (!currentFinishSlug) return null;
    const finishData = config[type].options.find(
      (opt) => opt.slug === currentFinishSlug,
    );

    if (!finishData || !finishData.upgrades) return null;
    for (let upgradeGroup of finishData.upgrades) {
      if (Array.isArray(upgradeGroup)) {
        const upgrade = upgradeGroup.find((item) => item.slug === upgradeSlug);
        if (upgrade) return upgrade;
      }
    }

    return null;
  }
})();
