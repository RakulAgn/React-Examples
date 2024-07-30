export type Node = {
  name: string;
  nodes?: Node[];
};

export const nodes: Node[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          {
            name: "Action",
            nodes: [
              {
                name: "2000s",
                nodes: [
                  { name: "Gladiator.mp4" },
                  { name: "The-Dark-Knight.mp4" },
                ],
              },
              { name: "2010s", nodes: [{ name: "Mad-Max-Fury-Road.mp4" }] },
            ],
          },
          {
            name: "Comedy",
            nodes: [
              { name: "2000s", nodes: [{ name: "Superbad.mp4" }] },
              { name: "2010s", nodes: [{ name: "The-Hangover.mp4" }] },
            ],
          },
          {
            name: "Drama",
            nodes: [
              { name: "2000s", nodes: [{ name: "American-Beauty.mp4" }] },
              { name: "2010s", nodes: [{ name: "La-La-Land.mp4" }] },
            ],
          },
          {
            name: "Horror",
            nodes: [
              { name: "2000s", nodes: [{ name: "The-Ring.mp4" }] },
              { name: "2010s", nodes: [{ name: "Get-Out.mp4" }] },
            ],
          },
        ],
      },
      {
        name: "Music",
        nodes: [
          { name: "Rock", nodes: [{ name: "Bohemian-Rhapsody.mp3" }] },
          { name: "Classical", nodes: [{ name: "Beethoven-Symphony.mp3" }] },
          { name: "Jazz", nodes: [{ name: "Miles-Davis-So-What.mp3" }] },
        ],
      },
      {
        name: "Pictures",
        nodes: [
          {
            name: "Vacation",
            nodes: [{ name: "Beach.jpg" }, { name: "Mountains.jpg" }],
          },
          {
            name: "Family",
            nodes: [{ name: "Birthday.png" }, { name: "Christmas.png" }],
          },
        ],
      },
      {
        name: "Documents",
        nodes: [
          {
            name: "Work",
            nodes: [{ name: "Report.docx" }, { name: "Presentation.pptx" }],
          },
          {
            name: "Personal",
            nodes: [{ name: "Resume.pdf" }, { name: "Cover-Letter.pdf" }],
          },
        ],
      },
      { name: "passwords.txt" },
    ],
  },
];
