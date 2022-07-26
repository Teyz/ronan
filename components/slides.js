import mantra_1_header from "@/assets/img/mantra-header/mantra-1.png";
import mantra_2_header from "@/assets/img/mantra-header/mantra-2.webp";
import mantra_3_header from "@/assets/img/mantra-header/mantra-3.webp";
import mantra_4_header from "@/assets/img/mantra-header/mantra-4.webp";
import mantra_5_header from "@/assets/img/mantra-header/mantra-5.webp";
import mantra_6_header from "@/assets/img/mantra-header/mantra-6.webp";

import mantra_1_content_image_1 from "@/assets/img/mantra-1/photo1.webp";
import mantra_1_content_image_2 from "@/assets/img/mantra-1/photo2.webp";
import mantra_1_illus_1 from "@/assets/img/mantra-1/illus1.webp";
import mantra_1_image_text_image_1 from "@/assets/img/mantra-1/photo3.webp";
import mantra_1_image_text_image_2 from "@/assets/img/mantra-1/photo4.webp";
import mantra_1_image_text_image_3 from "@/assets/img/mantra-1/photo5.webp";
import mantra_1_image_text_image_illus from "@/assets/img/mantra-1/illus2.webp";

import mantra_2_content_image_1 from "@/assets/img/mantra-2/photo1.webp";
import mantra_2_content_image_2 from "@/assets/img/mantra-2/photo2.webp";
import mantra_2_illus_1 from "@/assets/img/mantra-2/illus1.webp";
import mantra_2_image_text_image_1 from "@/assets/img/mantra-2/photo3.webp";
import mantra_2_image_text_image_2 from "@/assets/img/mantra-2/photo4.webp";
import mantra_2_image_text_image_3 from "@/assets/img/mantra-2/photo5.webp";
import mantra_2_image_text_image_illus from "@/assets/img/mantra-2/illus2.webp";

import mantra_3_simpe_image from "@/assets/img/mantra-3/photo1.webp";
import mantra_3_image_citation_1 from "@/assets/img/mantra-3/photo2.webp";
import mantra_3_image_citation_2 from "@/assets/img/mantra-3/photo3.webp";
import mantra_3_image_citation_3 from "@/assets/img/mantra-3/photo4.webp";
import mantra_3_image_citation_4 from "@/assets/img/mantra-3/photo5.webp";
import mantra_3_image_citation_illus_1 from "@/assets/img/mantra-3/illus1.webp";

import mantra_4_image_text_image_1 from "@/assets/img/mantra-4/photo1.webp";
import mantra_4_simpe_image from "@/assets/img/mantra-4/photo2.webp";
import mantra_4_image_text_image_illus from "@/assets/img/mantra-4/illus1.webp";

import mantra_5_simpe_image from "@/assets/img/mantra-5/photo1.webp";
import mantra_5_image_citation_1 from "@/assets/img/mantra-5/photo2.webp";
import mantra_5_image_citation_2 from "@/assets/img/mantra-5/photo3.webp";
import mantra_5_image_citation_4 from "@/assets/img/mantra-5/photo4.webp";
import mantra_5_image_citation_illus_1 from "@/assets/img/mantra-5/illus1.webp";
import mantra_5_image_citation_illus_2 from "@/assets/img/mantra-5/illus2.webp";
import mantra_5_image_citation_illus_3 from "@/assets/img/mantra-5/illus3.webp";

import mantra_6_image_citation_1 from "@/assets/img/mantra-6/photo1.webp";
import mantra_6_image_citation_2 from "@/assets/img/mantra-6/photo2.webp";
import mantra_6_simpe_image from "@/assets/img/mantra-6/photo3.webp";
import mantra_6_image_citation_illus_1 from "@/assets/img/mantra-6/illus1.webp";
import mantra_6_image_citation_illus_2 from "@/assets/img/mantra-6/illus2.webp";

export const getSliders = () => {
  return [
    {
      components: "Mantra_1",
      images: {
        mantra_header: mantra_1_header,
        mantra_content_image_1: mantra_1_content_image_1,
        mantra_content_image_2: mantra_1_content_image_2,
        illus_1: mantra_1_illus_1,
        mantra_image_text_image_1: mantra_1_image_text_image_1,
        mantra_image_text_image_2: mantra_1_image_text_image_2,
        mantra_image_text_image_3: mantra_1_image_text_image_3,
        mantra_image_text_image_illus: mantra_1_image_text_image_illus,
      },
    },
    {
      components: "Mantra_2",
      images: {
        mantra_header: mantra_2_header,
        mantra_content_image_1: mantra_2_content_image_1,
        mantra_content_image_2: mantra_2_content_image_2,
        illus_1: mantra_2_illus_1,
        mantra_image_text_image_1: mantra_2_image_text_image_1,
        mantra_image_text_image_2: mantra_2_image_text_image_2,
        mantra_image_text_image_3: mantra_2_image_text_image_3,
        mantra_image_text_image_illus: mantra_2_image_text_image_illus,
      },
    },
    {
      components: "Mantra_3",
      images: {
        mantra_header: mantra_3_header,
        mantra_simpe_image: mantra_3_simpe_image,
        mantra_image_citation_1: mantra_3_image_citation_1,
        mantra_image_citation_2: mantra_3_image_citation_2,
        mantra_image_citation_3: mantra_3_image_citation_3,
        mantra_image_citation_4: mantra_3_image_citation_4,
        mantra_image_citation_illus_1: mantra_3_image_citation_illus_1
      },
    },
    {
      components: "Mantra_4",
      images: {
        mantra_header: mantra_4_header,
        mantra_image_text_image_1: mantra_4_image_text_image_1,
        mantra_simpe_image: mantra_4_simpe_image,
        mantra_image_text_image_illus: mantra_4_image_text_image_illus
      },
    },
    {
      components: "Mantra_5",
      images: {
        mantra_header: mantra_5_header,
        mantra_simpe_image: mantra_5_simpe_image,
        mantra_image_citation_1: mantra_5_image_citation_1,
        mantra_image_citation_2: mantra_5_image_citation_2,
        mantra_image_citation_4: mantra_5_image_citation_4,
        mantra_image_citation_illus_1: mantra_5_image_citation_illus_1,
        mantra_image_citation_illus_2: mantra_5_image_citation_illus_2,
        mantra_image_citation_illus_3: mantra_5_image_citation_illus_3,
      },
    },
    {
      components: "Mantra_6",
      images: {
        mantra_header: mantra_6_header,
        mantra_image_citation_1: mantra_6_image_citation_1,
        mantra_image_citation_2: mantra_6_image_citation_2,
        mantra_simpe_image: mantra_6_simpe_image,
        mantra_image_citation_illus_1: mantra_6_image_citation_illus_1,
        mantra_image_citation_illus_2: mantra_6_image_citation_illus_2,
      },
    },
  ];
};
