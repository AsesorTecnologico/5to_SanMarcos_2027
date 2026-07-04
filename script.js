// ============================================
// DATOS DE CURSOS
// ============================================
const coursesData = {
    courses: [
        {
            id: 1,
            name: "Aritmética",
            description: "Números, operaciones básicas, fracciones, decimales y más.",
            icon: "fa-solid fa-calculator",
            color: "#6C3CE1"
        },
        {
            id: 2,
            name: "Álgebra",
            description: "Expresiones algebraicas, ecuaciones, funciones y polinomios.",
            icon: "fa-solid fa-square-root-alt",
            color: "#FF6B6B"
        },
        {
            id: 3,
            name: "Biología",
            description: "Células, seres vivos, ecosistemas y anatomía humana.",
            icon: "fa-solid fa-dna",
            color: "#4ECDC4"
        },
        {
            id: 4,
            name: "Física",
            description: "Movimiento, fuerzas, energía, ondas y electricidad.",
            icon: "fa-solid fa-atom",
            color: "#FFD93D"
        },
        {
            id: 5,
            name: "Geografía",
            description: "Relieve, clima, recursos naturales y cartografía.",
            icon: "fa-solid fa-globe-americas",
            color: "#6BCB77"
        },
        {
            id: 6,
            name: "Geometría",
            description: "Figuras geométricas, medición, propiedades y transformaciones.",
            icon: "fa-solid fa-draw-polygon",
            color: "#4D96FF"
        },
        {
            id: 7,
            name: "Historia del Perú",
            description: "Culturas preincas, imperio inca, conquista y república.",
            icon: "fa-solid fa-landmark",
            color: "#FFB347"
        },
        {
            id: 8,
            name: "Historia Universal",
            description: "Edades históricas, guerras mundiales y civilizaciones antiguas.",
            icon: "fa-solid fa-monument",
            color: "#FF6B6B"
        },
        {
            id: 9,
            name: "Inglés",
            description: "Gramática, vocabulario, comprensión auditiva y conversación.",
            icon: "fa-solid fa-language",
            color: "#6C3CE1"
        },
        {
            id: 10,
            name: "Lenguaje",
            description: "Gramática, comunicación, comprensión lectora y redacción.",
            icon: "fa-solid fa-spell-check",
            color: "#4D96FF"
        },
        {
            id: 11,
            name: "Literatura",
            description: "Géneros literarios, autores, obras y análisis textual.",
            icon: "fa-solid fa-book-open",
            color: "#9B7BE6"
        },
        {
            id: 12,
            name: "Psicología",
            description: "Procesos mentales, emociones, desarrollo humano y conducta.",
            icon: "fa-solid fa-brain",
            color: "#FF6B6B"
        },
        {
            id: 13,
            name: "Química",
            description: "Elementos, compuestos, reacciones y tabla periódica.",
            icon: "fa-solid fa-flask",
            color: "#4ECDC4"
        },
        {
            id: 14,
            name: "Razonamiento Matemático",
            description: "Problemas lógicos, secuencias, analogías y patrones.",
            icon: "fa-solid fa-puzzle-piece",
            color: "#FFD93D"
        },
        {
            id: 15,
            name: "Razonamiento Verbal",
            description: "Sinónimos, antónimos, analogías verbales y comprensión.",
            icon: "fa-solid fa-comment-alt",
            color: "#6BCB77"
        },
        {
            id: 16,
            name: "Trigonometría",
            description: "Triángulos, funciones trigonométricas, identidades y aplicaciones.",
            icon: "fa-solid fa-shapes",
            color: "#4D96FF"
        },
        {
            id: 17,
            name: "Economía",
            description: "Sistemas económicos, oferta y demanda, mercado y finanzas.",
            icon: "fa-solid fa-chart-line",
            color: "#FFB347"
        }
    ],

    selectors: {
        tomos: [
            { id: "tomo-i", name: "Tomo I", icon: "fa-solid fa-book" },
            { id: "tomo-ii", name: "Tomo II", icon: "fa-solid fa-book" },
            { id: "tomo-iii", name: "Tomo III", icon: "fa-solid fa-book" },
            { id: "tomo-iv", name: "Tomo IV", icon: "fa-solid fa-book" },
            { id: "tomo-v", name: "Tomo V", icon: "fa-solid fa-book" },
            { id: "tomo-vi", name: "Tomo VI", icon: "fa-solid fa-book" }
        ],
        intensivos: [
            { id: "intensivo-i", name: "Intensivo I", icon: "fa-solid fa-bolt" },
            { id: "intensivo-ii", name: "Intensivo II", icon: "fa-solid fa-bolt" },
            { id: "intensivo-iii", name: "Intensivo III", icon: "fa-solid fa-bolt" }
        ]
    },

    // ============================================
    // ENLACES DE GOOGLE DRIVE
    // ¡REEMPLAZA CON TUS ENLACES REALES!
    // ============================================
    driveLinks: {
        "tomo-i": {
            2026: {
                1: "https://drive.google.com/drive/folders/10VR6XACXrhpRPsJlRCLw9mbk4GylsgAJ?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1B1zhEH_7zSNImdqFcMhovBMm8aydGe3v?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1LQAclxHsCj2C4_D_WMwEiDIIKU_gTTp2?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1s1cvwPsSGx0LReFsW_L4aDK_YasKAk1v?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1R_CZ_HfdAcSzdavFg2Q4NafiFTeZ1ekq?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/18W4hTdV-fym4i1rEl8Dk4KWEoUwnoZ4-?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1pYgtBJaqSJD5uau8heI1FBUag7d0MOx7?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/11Lt4Zfe7GLYh4rjh8XPUKK0QH0SdZgMk?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1xugTh8DJxXBFN43Hfz4ZgpJuRMA-1ylI?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1ghCzcmZH8Dizhh4f7fX3EhwmiP2XUWEf?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1OUeEp8kuEn_hyMaY9kZTtFGBqRpS5YB-?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/16IaVx15pOnX8n9vsrZ0jZDW8EOs7q9jZ?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1iuevvq-haSQKXucR_LkX3qPlDKDj8qez?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/16sGIkHpFKSngmacdLfZpq5I0keyD_6za?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1DIg3tQyH54wBIgbyUdYhzOyelOU4SNHS?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/11C-YermLsjkJGfxMAqDf2WrxaCV8IvLD?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1DNZQS40WfLO7pgZCJh6AwLwJbX-VLb2b?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1qUYv4ds__Y-Pi74J-Pv4XHxMtIgG67LV?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1IxJpaWhppTuOo0QSQlpJ0R75BQ7xbsH-?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1H7FtJARHzKrgegu3h05TrHKbSbXOODP9?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1sJ5ItwlBdl92yDUzJMqZ5esNc4wd7EHK?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1WENx1CeWqYLj9Y8lOWis8rR8W6Lovl92?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1PaPbElgreGlLHhrVpQp9nhmzq1lxTb9q?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1AAoo8xaqDw4rHcSv5mFGnAd00FaF_yNH?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1nwp9ZZC9SHApHfpgJIwLh_5jl8OLxk5X?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/13pw4KLCQjuGOe1VmI15vD5iTygO6yJo4?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1mixEqQAtilCmrABTgbrsvPz5Y0Ou1cGt?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1gByjGmSKn_n_XSbRE9ZkiPlynXv5OJbY?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1pRm-Eo7y3DM3eP8rzYx1KtfOZUmJ7Xdd?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1tbNkZ5xRhETDt4Majx45ECT1YlbfDAfb?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1qSr-TGyEL4wX8iFHl64El6dxOqTPzsaG?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1BdtnlEL1Qnhzs5lq0LxCEkW2ckYc-ngP?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1eI32UHH9LsLOWJgmp_s7YZB5zd-pJuRo?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1SlqBC7skwDbUddwtkTGuB7etzDFXn_Yp?usp=drive_link"//Economía
            }
        },
        "tomo-ii": {
            2026: {
                1: "https://drive.google.com/drive/folders/1NwXMFVjSFfCiHw-kJGRurm_j6uMqSiqC?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1XEAl17azoUadxp4yTNnt235pQU2XYYUr?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1bXx3ekyPHGYp02kfXVz7ynhUuMZgYrOJ?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1EN_ZrI4cGSjznIKZy4lhBCZY5SRp9aTk?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1L3ohR6Fwe34lYR3uIHXrkIUgKPoSEt4o?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1g3mvih9AVZFMehWeylqjkPZ-YQWRW-I4?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1xfNV6wKSerKGFbI9wUutiAiAopumJm_3?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1rlj1ZR7cjqeHJQZkIqlWyOrbyqGDTZfR?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1OWtPuAjLowoyvAmoAXK3qAYhLASIokfE?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1FFegyJ6vuzWz4G_Fw29za3XZm1R0AVQV?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1nAT0LHhKyOM_1EpTT2eHTE68nZ_MrIcV?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1EYUILwn67MaLoicJELjrbBQu3JBPHsUy?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1JEPYXZFaj-gUOTSIxsPMKr3AUhBdLQ0l?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1jzqYojN4aOOsWMJZvIys9NePzYiNu-nj?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1daGMDd1Q1wMHh7NI2grchGNxC8tOPea3?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1zdKSr3Ng81MO4w2jxxuKpGIIAn_lVKoB?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1dzY1ZSsZxMzeuOeWBPT8aJdBMX7m5tRQ?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1mcqYHce83RIeYSP-fQWqMEQ80_3Dvgko?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1AUQ8w-0N8OsMhngPmVCaMafYEjcWtejx?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1ukSdY7CbzlrEwXatzQq4mfwi38vvDb7Q?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1PqiwWKaPoyRJeo0AxHnfSy-zMe8kD38B?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/183gBIeBRcJd3qZHSFNmzDEZv5oQt82C1?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/103Km1IFcjR1m3bXx5FzJf7L_IWP2aWEc?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1CfA7lM-dhwEusOZrIsGvzOPLC9FJftDb?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1ql8-OP6aDUbKDvGZ2pduT7YgOyoCQrPn?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1d4x2v_9mCGynk3rzWWgeHGL7O8x5LOlt?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1sgksjoW8dDBNqBccSGL0u3HyDL_9cFtc?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1g5W9kblxW1xPatFV1DMRGUB-3Ur1S2tu?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1uur3xS-n2x61ARz_Dhlyq5QdDoy30bGG?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/193blxChhlJMDbosPLorZDn53kcCz_wrM?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1lSTb_En8Ts6YMlBe5Msbqw8pTMpaHQG0?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1oe-0arkMdurd55kQc54qhPwsn7bT-OI4?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1fyu5RGPVXOJq5wZi2OZfevWw3p335woA?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/140cQaIQw9sfUGG_gcTd8HvQ1x5Eal7fG?usp=drive_link"//Economía
            }
        },
        "tomo-iii": {
            2026: {
                1: "https://drive.google.com/drive/folders/1nZFrM0Iq-Y4sJqi37SJvn_pAGSZsEXVD?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1hjbqp0NVou_IZ_C7Fb3za7YwrDYQRxwJ?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1szh-2Yge6tNQpxCMdm_p4e6FBiui6XUr?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1hpLyQl2ZmwXGDAJbFHx6nHdL3mEXqrUG?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1ZYW-0g_r4flVcimjAbWGVhtZreXWdUMv?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1Mxs1GaHUiRo2I8mDyY14YaxhRcXns_dT?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1Kyn8gbS7RGLzb95GKN0Pp8FbHgyBppC-?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1HU5X1S52KsHMApSqPufEHH9Y0HQu7HOn?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1hwDZZVxgrpqb1ICiBVD3hy-HASlLg8xd?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1bAHntmhNKIXs98LDEoOUc9SD-_e-8yD1?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1mLY4uicS-bjzzL_2qePlRveRl0WP_Zud?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1iaaoE3AumtQa6-aizOYqBxxsPcpJZK7s?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1z3x8dHb-MApJKyC-dw74zmSLcbFkwjWB?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1y4ebr7Od3xafE45KTMZTregQYl_O2lyu?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1iQiuE-BhaA9uJ9Cg6pilfqMoE7fPTUaA?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1O_eJ3P13fi-86bnHZu5tom_Drs92w58e?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1f_Mbng3u8-DVZXF-ned_VG76N0DJjW9X?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1mMIR81-WuGc9CzJMSk4bVzKrXpc3uQdo?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1s-iDFW1ESLlJfavSWNjVcRMqHZk-fENJ?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1VTthDFF8fnNEU1V_cX6FEju0PH8IMp-j?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1Lf6JyB4ln5T8L5_JYjH-B5N49jqv_oMG?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1wWYyfcC5TQfXMtV5Lpk3KUZLhBpVjgma?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1yYLAfzeEoxS9T6N0blq5jWiCzDqfrgBp?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1oGYxMod34XMFZBXMitFZnpIgn4itKkaK?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1NJt9wGHPIC_4PU9lIPYOBM_mDHoMnd9E?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1KUuWquPurjPIxHWboltZphY1Chk46fTH?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1F6co0EPbWTbO_q1qxGnd5W8dxGDUaPx1?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/18OmNxKp8n0_ogRJsecUb8dGdWvz5CZaF?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1O0gO03AtXOf-HY8vK8SFXWgX-Y8TDmse?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1wU-R1HTnNIkphWgTOC_DBsAiqfF2xr0_?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1NS2rXuYMqlpLi-Cepg_i-DdtnRcsrPoS?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1gxja0jW9BIpZuz8A-5smcwMe5YCf940_?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1SSvILS89DMUVnnHf-hJaH7luYLwafKWK?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1c2g9TDcZne-zI_K9hfFOgIT7WNds_C_G?usp=drive_link"//Economía
            }
        },
        "tomo-iv": {
            2026: {
                1: "https://drive.google.com/drive/folders/1ZwxEZBReDaTT6lFMzZQCnWDeUJPQRzl3?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1L-GH3iEJj3cIUVBxme5kRT6dGzG_b0kJ?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1bfr3_bSLeUn8lGC7p4pdDoPeFWvPabqq?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1wTpb-VrLQFmLqhvFtMIz_HdahL2BWDEM?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1mceXNdcE6hJMBXL0t54e4zw18wnFi2sO?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1UxzrBP5g0sIeKRoaQADLCzZColX0yr3k?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1_UmeDNSLQDd__VAatMG2bdTuIXFLwEAp?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1HAGkBh7FikrFGsmp-TfqksuGg67-44mg?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1tFyFAC1_FnCaVQ6KUVfB_dUk88YvlOA6?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1jjfW-QwJgxG8ZzrxVeaQ8cPirz-96pzU?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1fGTGpK__1MiArAdchYVw5-VjiMxZR0UU?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1MBy7mhZV2smnrV8op0t188K0Sut9V89K?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1wGEyIK_D7Zi90TYFgeGeDXgPFGZLt_1x?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1zIqjIOw83rQtBAhAHM1jBwzuGMm1d61V?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1Du3bozUmxNlRuvYWpVJ6Tao0Q8dn8GCq?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1dQMLM8wtvrQhGcTNCRT4rfvWNumWwMrv?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1i_vrGo4mL3SOxGg8GxMyRrm5dm2BGqmu?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/186YqrSQMq9ogOdeQkrKephh-AtDSbeAa?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1obAxQ9YYsLz_E6z8DKr3hsUbfOGVbfHO?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1rgWTVtnhG8rr9AAmfCXhJox2lQYR6t8g?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1qRDpAiCD78LRDg6RLH9UnjG5DZ8zFgh6?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1pj0k5MceO12NLETKGYIO_GcW7oEKpGlZ?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1WJUGbHeyA45S79JfnmatUa5saSpF8dgB?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1U5D2vzhLj2icvHQo_WP3WMXK9tdCk6Ew?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1lXDXI0I8aC1BC6G4OXqFTLfmXCWXQndv?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/17BEJN3NzXYYAcDhtroIeG7PhvI2SYUoJ?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1evjltvcZEi_jjijFCqSgzRX5sun8tX8r?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1kqtj18hOYD5euWJFtlbA4-6NniWQzlcK?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1t3kmCV56zF5AIJp5Gq-nQ_D1d3OwuI7O?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/11XWIlSiT_gluknyjLPkqBerzKxsl1HOD?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1Z4KVun_H2q8ofheePBc3Tcql_p_5uzLR?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1oDno_dZPE_42_lQSQV5-CbtShLpkRePo?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1IaOpGHmjsKtQYDd4PtWOMRMSA47Vk1iC?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1X60Dl39h4uS8mXEFDI0W5mmaFYO6jNMf?usp=drive_link"//Economía
            }
        },
        "tomo-v": {
            2026: {
                1: "https://drive.google.com/drive/folders/1Mt6yJbiRft88IuBePy28QP8_cnj2IKft?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/12-blOCFkCryb_9_d-E53ffTiOdnuqYy-?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1qeKJjC7PczATRjzZtKiJziaFHTntsssh?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1X7bgZXxouujdcWpSCP36WqcXujLtHs3K?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1zv_uIXjusATx6zhVBNO1wEyE79DTxd1T?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1Cb3NTiY6fCa7nR4Ihj4tM1f6BoBp1QvA?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1pdnDKoW0AMjNTFbuE_iS2650s13SbB9R?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1WryDc7ApmnIPdcmML6IaPm0DAfYQ2wfZ?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1OO4asWPPtXUrNPEHk-wHWMFsDKC4pPjY?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1ufvEZEsfLdR88fKmS6Iaj8PIuUWp94Tf?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1_ybo84HXo2_892F6nRbEVRvCHbDyyzyq?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1oI3ciJVamj57r83Hka_CIQo-XX6qBxVe?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1-1zx32nBxNpvkazRsmEhRu5fPtANPOGt?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/198u_zeN1Sqgt87bth2TT9GqAPZRQHFAx?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1OVNSfKeNbGqlY7xC9K7Oj6DSJ4t7dB6N?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1xlBqUV4oy3F9C59lViLC47lVzY-8en3C?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1E1imL91vzg1drIeuA_67CRlCzWAy5YHJ?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1N-RGBEgl0C8hAXX1f76kfYV3XQED5Ica?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/18QClNVKZESdUVURLr8MkPtfwxZT22pY5?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1Bxo8A0HA5yFvnKCbbt4o3Hqc7GhVTtfS?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1wIZVMcAv0kuES2z-UmYOW16CSY1F-hZN?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1iQLKFcGHgGdN6i8ugmQAkOLiSTC5lMBD?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1duFQakxT45nSb81U1DcgpuoDbUw2brjP?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1KFaX8caDahCHiN0WVhzLawzQLXtOWB8r?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1mQfSfM4e5lP4hmVheBLVJ-M08V4PXkmg?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1ItHMpp5SvkBeYQh4jHBr7nnzrj27rQA1?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1gIwBCRS6iQ3Zu6QHSipa4YAk4ZQYRMll?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1oG1vjdoQIwT8belxLkmMOdLmGU9_dHlV?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1qg3QdiGNGqBHQDRZeTJ85P_iP376781K?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1S5k0_xcmstrj5QHsAeWbqFKlW3L_orXw?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/10Mg_61MtQ2_I_DkCcttwEI9f_UevQiQR?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1rsPXA1s1ud46niSa_LZFXXqwFz_8zLOl?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1I3JVosWU7EjkJWBXHO7pRayIXt7x9cBZ?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1onXFVKfKKX1nAJzhpBM3_9i49UDJglRb?usp=drive_link"//Economía
            }
        },
        "tomo-vi": {
            2026: {
                1: "https://drive.google.com/drive/folders/12gmfKCvIlMZqxBH7ILfbYpPyW2Q6n5X6?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1SEhe7ITY_VYxTrqGTamM6Nn8kAt81cjd?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1jm5CDSk_Lv8gIj9jmRyjZWSkQ6SqmUTt?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/10htjJsaL-I9SU69TqKWkzY5wD0FWZ-06?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1rCQMiemLOCXxYm603le684Ksf_AdnM9M?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1MF37wMA8BNkDrU0NqLZHanKDk35rLW2f?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1lxdPjs09nRIbKWnMWDllhHC2q6zgcejW?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1UNwOsGAP8O2lVBE6iiQBSks7YTWCgZlw?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1DniYVHVJXp7ERL_PRVgJhnNQN8x9nqxI?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1llq-Tuv6eR-13iZ9o5ay8R6zg4Cau4i5?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1tOgzkqZzj6jv-RTDs7oByR4psKrxbZQ7?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/18r8SHfO_ohzYAP-OkzAiJ_Ke6MqKqFyF?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1GX0z-TYblXt5txXj3d6B980iTfJuNUis?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1O4CtTon51NhvnANJvJV2bCjYdOVjP6UX?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1UyjxSaaFvvNNaLOpKsr4Cw4yyEzJJo_m?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1bOhbMqf5wyQIFen5yd_PxVMy0e3Ryxjs?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1H1fQs9-DHrYasmqwWckfcmnlX2Xa4zED?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1TUf0jG54_0Xn2EnS0nrxUsi4kJ7Nsixa?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1s0e9fbGKUEUDHeBmICsE8Env6vdGJ3tT?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1l95wN9cyTe-4YoBDzIktuAbztXnQWiHY?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/17gZCX6h4cGHh2H_mipANyqftQ2Jjoh5J?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1PoVBJQw19UYelBGuoOLCFL4Wmr9_O5SI?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1-50nnD2C_aSnAfEtm-Y78vu7Cj37rFmL?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1ehsVRpbC0tT3OKeQgmS1_qhjkp5gzpez?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1brK3LxpP2y1RGj7UWaZvYjPvuQY_sAn0?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1lq7pPCnB6--T2JIwULsMXDasF7oh9Zdq?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/14gTYsNIFSSHRwM1REvMoSEMb98_hYHDD?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1QUWyyjUCYgYiY9VXbw8amna03jSkn_Lc?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1gcF6P9Q0MLd74nH1mzC3DPPMLEnx9NKi?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1BfHHzk3QPHQz5BOIBkDHuY9yolGIbp5B?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1asAHWw-w-FGPjjlmsDITdBXmsuzLY7O4?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/14jaZFuEZ0vhbRASft05TMS5GCaxNkTzz?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1xPzMS1d-VqGXuRK7iGZXHG6N_O3BShtX?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/12V-HC7F2nxHXgVsAMHzQRxh3VyVn_lyO?usp=drive_link"//Economía
            }
        },
        "intensivo-i": {
            2026: {
                1: "https://drive.google.com/drive/folders/1r2M7i5h5l2Isgh1zMeqzYaRZu1bDo-1w?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1-GydVW9X4ea7_b1usPbXd0jQHH7uHeUI?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1KYAUJ30hjv99j9jbLcREm40w3AKBHAha?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1pqL0MbQhlBeb2ZFtkPzgMhDhUe44MDcU?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1CAA72tb_mLS5RWymfvUqNKHXYXuFYzvK?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1lLCxEhY-JF2p2_9KTT-fwLS0F-vU6287?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1irUfjzR00BCKFckg94eb5pzm0q9j7Ldi?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1f3zVONmJtN7N6MiDQdPRkO3TX5FAJ9Yc?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1rbQWKky9ZlBBpVjfd-5_APC2LgxVP471?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1F0b5QsApysqFRkfMnbLRMagQFvT64v5Z?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1dFfpfBnnEvDzrFqaRip5u7Ig7r_Fegnm?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1sYDCHDIsm5iroOYmY9A0HHm6JVS1R5Hz?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1zNfVf-XviDtLX1UBF3M74NhgDtEWU8zx?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1fC1A4ymuctJ1elQBG85wH__-BT19qFRo?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/16XypaMm466EKRelxw-bjJqBTPWorFmDq?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1cRPVesRhg_uaZwoTp3v3axSodk6jS4wr?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1D81wwsh9N_6Q5LtdAQcccvwgIuILxgyT?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1uwWyADdiE1IYahIZm3JTsGHqnBbwPQwQ?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1IRElFYJ6rbi5E7b1lofw2fS25rLqrzZg?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/12zxlIuE2EttARWxwCNPLR5JcvE_X_lrB?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1kDvsI7OCqLOUkEWh3ScZWs4bMWHCZ7Ra?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1TyPa7OE8Yvjy-TU9m-EhtTg_9_k6FjVJ?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/19qy_3hXuZrlziFANS7kwxDuHBAUDcdAX?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1_7b7yXXjqsMJ0_1AP7NHNLI6MS_bUCy1?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1V5eu3KrzVAI92GtfHWXJ34xY_SEvg0dv?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1n6SQWBSF-KK06tnrDbeibdidYNwlzvLN?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1nPJkmf5Meas--hRgim2KZuoQaVyoOSdB?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1thmSvt7foK6_xTVUBDqCjl-u9KTF2LIo?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1w16sJq39ZhSRC4T_QBbNrgzRymrMUKO0?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1tN4TsekIhL5TF8gCotlDIcHDGJwLIuP2?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1C9XGpbW-tGpDXNmzHLfG3p73klHfdVGI?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1sAXFxdDtOoKDfQv2S-eWvnjfxLwAsrD0?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1lAZyWtG6U43MryRYQyX4zEBpE_SfJRLm?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1AbHYOKPsp_rKTRc2zUxteW4C7S9Mue94?usp=drive_link"//Economía
            }
        },
        "intensivo-ii": {
            2026: {
                1: "https://drive.google.com/drive/folders/11t5U-7G8ZfYq9x1z5QHrLoQgMgl1RciA?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1uFn_pdYX6vaSXpS_I_r2HjlDU1XVGNz2?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/11Aaue5letI804yRlqWVFfrvELAvdY9l_?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/16lNt8ngUrDR-ICY7ri3bwXUjytGeVXMC?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/12RgjCQituJiHYJSPbaKaCWKKek3UsLCe?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1zmdebelDOO_KLeBIGC-4WlW4w_CIOFiF?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1tB_eLI6XWfmYRk5YIPZswvPiQfRdyzWh?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1EXNljYKtD-wR1sJkejXhLr0WCrIeuVKG?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1D6r-Qb55r2AHejjSGeyfp8otdlzDtOl2?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1vHu6JxUU82ihkSxsyQU6F0WrS24j2ulh?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1BZYIaa3j8w_24JyQhRh0HWmQ_7YgolKQ?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/104YPleG209iDWXRLFttnhxyO74c72Euc?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/19yPjHgZ1Eqe3oMEjqLoIgJgRmOIoUmYY?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1oaZlM4zKVxJFzreHRFpKL4sBywvKBvdM?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/17pkCF78iQIVJlf7sdFVKLuEyb7KIA8Qv?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1Ixu4IQ7VLYh4CbDmQDD6WchpakyliZNg?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1STeF7_pWkwzw35BW8ZGai-CIq-XPX7Ts?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/1AgJCnWvCN6gnUjSAH35vDE-ZTKgYSrcu?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1hKolXedwrojK046xrkY3oGKF_mDqSTuw?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/10j8p3DeGM9WBuha7qFB5CdrJwz9zGcm7?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1aq5hNfOFCsoMsEFwLEr_nQesuo1acwsN?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1LBhBs1-QBTifaSNQ5IBqgUS2fqR3bOzT?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1Og0eUb1zYCqUHOhNE525f8I3IpGJ4h9B?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1CfJP0U96Q2mJYgnpp2lMIT2ukh9qD704?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1lfeZoko_j8DrRd0NRfQNYTaCmzTcHoAy?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/12OTzCJ9_YAXbHLMzHWA1rDUu8OfEfWp3?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1Qhz5HAp-NACY0baWMPlbWjqh9S3OT_jZ?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1H9jvhvvpxnQIwDh42M-ka7UbIb4zPwkl?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/191EPNnoRxY8mveFz2XZzK2BiMxJ-E7m7?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/10_gH7nfwGy3f80oSijsprx4iM63YdJa3?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1iCddPeWLwBVHWfuZLgFoh5iiMQ-9T9m_?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1Z7w7Kp1YSsRobJoBYdTJGJ9BqcwqHOsS?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1rbZNwNB7oarGfEcp_eGrUVEKcJMLQ4j4?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1onsFB3YxwmtEggHQ-q-9-H0v2J-UHppD?usp=drive_link"//Economía
            }
        },
        "intensivo-iii": {
            2026: {
                1: "https://drive.google.com/drive/folders/1yn9oDu2d_87bVL5sCP3m5izfU8eTLoOp?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1GIX8nUXUgtBPJyGXxQvAR9hi-9xRH9J5?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/1G3CttOAE8vezzhqVtAD4jfAGZG9Z4cVP?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1l5XqVCJC3VSKdqqDiBvqch0eC3BR9Iu_?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1iKVvU4Yqo7_h_g3M-akckBcwh7bfO50q?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/1t_dM9GKU6Oi31t2859sIT_DHCyTlfC3_?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1o2XLCOSLKdsKNKip4OQslys_tI_N9hsT?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1rypwM24fX4dyiarZpB_lWiN8pGXya6f4?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1IYIZsFd3EN4HHlC_6oF7b32evi1hZQaU?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/15BW7Hy5-_jtGB02DlmxtOVj9G4rL-ylv?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1vvz54E8J1Vq_VE5mDIGx2o4ApQpQK7bz?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1Uz8kb__j9kNYy1QOTr1lrIpAOty8Fd6L?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1D2tbJZpunZiXGxyjt2wntgCb5p1i4vcC?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/12ZZ8eE_wOFPPs0NhDgF7Ys9o97ERj0h3?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/16QS-E0ZrT3pYPmraUIADeZfmRIDlxz_I?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1clMzkiUJ__VhG0NPD1xU2gtTkuHvDZc2?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1U4llCwZqufugDhc7NxFIF4VDMSmJ6GTh?usp=drive_link"//Economía
            },
            2027: {
                1: "https://drive.google.com/drive/folders/16GUZr1ZwgT1mjHR-IzKvC1DEEgm2rLh1?usp=drive_link",//Aritmética
                2: "https://drive.google.com/drive/folders/1qj9a_F6j7lZ91yGs9Ts-SNjsJuoLv8G9?usp=drive_link",//Álgebra
                3: "https://drive.google.com/drive/folders/11J969LNugQAPMWX-ZQTbxh0mtTVnIvEm?usp=drive_link",//Biología
                4: "https://drive.google.com/drive/folders/1wxEwRFzmGiYxpKB0_xvdGZstQKWTHjgb?usp=drive_link",//Física
                5: "https://drive.google.com/drive/folders/1zgT9LLafzu-mbH71Xtp9FbTfU5Zy44s5?usp=drive_link",//Geografía
                6: "https://drive.google.com/drive/folders/14tfCqDnddyEPbdch_vhCsn1EK58ePlMO?usp=drive_link",//Geometría
                7: "https://drive.google.com/drive/folders/1iROB3B0jyokV_-cj-L8KbJ3EPlWgSs8j?usp=drive_link",//Historia del Perú
                8: "https://drive.google.com/drive/folders/1diCetBGkyCkhqRIzpQrRXyfRO_TPdk69?usp=drive_link",//Historia Universal
                9: "https://drive.google.com/drive/folders/1IwVoqmI609BMiuNTPaOwXe_Tpq8h-pxo?usp=drive_link",//Inglés
                10: "https://drive.google.com/drive/folders/1x-2-blFTCtOSY4sEQ7Y3kS-gKWBxGLmO?usp=drive_link",//Lenguaje
                11: "https://drive.google.com/drive/folders/1-kaVE_xcfefv5uS4_zWpYA_dW4fltAHo?usp=drive_link",//Literatura
                12: "https://drive.google.com/drive/folders/1tihwqY1SvLLEKwkXoosujL-_U3EzKMzt?usp=drive_link",//Psicología
                13: "https://drive.google.com/drive/folders/1857E8TpGXfPW2FpD7a9wFS_iomVUuEli?usp=drive_link",//Química
                14: "https://drive.google.com/drive/folders/1-H1Ye2YWzwGNkbelmpSIYcTJOYOzcLJx?usp=drive_link",//Razonamiento Matemático
                15: "https://drive.google.com/drive/folders/1EXlVl61cJGpTW6eTwT0VN1Z6zJ94k1iQ?usp=drive_link",//Razonamiento Verbal
                16: "https://drive.google.com/drive/folders/1IGdN6iyviEDeXtMhUgCWDteL8kQphjBr?usp=drive_link",//Trigonometría
                17: "https://drive.google.com/drive/folders/1Z-ajWaeVPBu8gKNX6sWl5dMlykpr96BS?usp=drive_link"//Economía
            }
        }
    }
};

// ============================================
// ESTADO GLOBAL
// ============================================
let currentYear = 2026;
let currentSelector = "tomo-i";
let currentSelectorType = "tomo";

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

// Generar botones de selectores
function generateSelectorButtons() {
    const tomoContainer = document.getElementById('tomo-buttons');
    const intensivoContainer = document.getElementById('intensivo-buttons');
    
    tomoContainer.innerHTML = '';
    intensivoContainer.innerHTML = '';
    
    // Tomos
    coursesData.selectors.tomos.forEach(tomo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn tomo-btn ${tomo.id === currentSelector ? 'active' : ''}`;
        btn.dataset.id = tomo.id;
        btn.dataset.type = 'tomo';
        btn.innerHTML = `<i class="${tomo.icon}"></i> ${tomo.name}`;
        tomoContainer.appendChild(btn);
    });
    
    // Intensivos
    coursesData.selectors.intensivos.forEach(intensivo => {
        const btn = document.createElement('button');
        btn.className = `selector-btn intensivo-btn ${intensivo.id === currentSelector ? 'active' : ''}`;
        btn.dataset.id = intensivo.id;
        btn.dataset.type = 'intensivo';
        btn.innerHTML = `<i class="${intensivo.icon}"></i> ${intensivo.name}`;
        intensivoContainer.appendChild(btn);
    });
}

// Actualizar etiqueta del selector actual
function updateCurrentSelectorLabel() {
    const label = document.getElementById('current-selector-label');
    let name = '';
    
    if (currentSelectorType === 'tomo') {
        const found = coursesData.selectors.tomos.find(t => t.id === currentSelector);
        name = found ? found.name : 'Tomo I';
    } else {
        const found = coursesData.selectors.intensivos.find(i => i.id === currentSelector);
        name = found ? found.name : 'Intensivo I';
    }
    
    label.textContent = name;
}

// Generar tarjetas de cursos
function generateCourseCards() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    
    const links = coursesData.driveLinks[currentSelector];
    const yearLinks = links ? links[currentYear] : null;
    
    // Actualizar contador
    document.getElementById('course-count').textContent = coursesData.courses.length;
    document.getElementById('hero-courses').textContent = coursesData.courses.length;
    document.getElementById('current-year-label').textContent = currentYear;
    
    coursesData.courses.forEach(course => {
        const link = yearLinks ? yearLinks[course.id] : '#';
        const isIntensivo = currentSelectorType === 'intensivo';
        
        const card = document.createElement('div');
        card.className = 'course-card';
        
        card.innerHTML = `
            <div class="course-tags">
                <span class="tag-selector ${isIntensivo ? 'intensivo' : ''}">
                    ${isIntensivo ? '📘 Intensivo' : '📚 Tomo'}
                </span>
                <span class="tag-year">${currentYear}</span>
            </div>
            <div class="course-icon">
                <i class="${course.icon}" style="color: ${course.color}"></i>
            </div>
            <div class="course-info">
                <h3>${course.name}</h3>
                <p>${course.description}</p>
                <a href="${link}" target="_blank" class="drive-btn">
                    <i class="fab fa-google-drive"></i> Acceder al Material
                </a>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    updateCurrentSelectorLabel();
}

// Cambiar año
function changeYear(year) {
    currentYear = year;
    
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.year) === year);
    });
    
    generateCourseCards();
}

// Cambiar selector
function changeSelector(id, type) {
    currentSelector = id;
    currentSelectorType = type;
    
    document.querySelectorAll('.selector-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === id);
    });
    
    generateCourseCards();
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Generar botones
    generateSelectorButtons();
    
    // Generar cursos iniciales
    generateCourseCards();
    
    // Eventos para años
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeYear(parseInt(this.dataset.year));
        });
    });
    
    // Eventos para selectores (delegación)
    document.addEventListener('click', function(e) {
        const btn = e.target.closest('.selector-btn');
        if (btn) {
            changeSelector(btn.dataset.id, btn.dataset.type);
        }
    });
});