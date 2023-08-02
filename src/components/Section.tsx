interface Props {
  img: string;
  personName: string;
}

function Section({ img, personName }: Props) {
  return (
    <div className="relative mx-20 mb-16 rounded-md border-2 border-black bg-[#22D37E] shadow-[2px_2px_0px_0px_#000] md:mx-60 lg:mx-20">
      <img
        src={img}
        alt=""
        srcSet=""
        className="absolute inset-x-0 top-[-40px] z-10 mx-auto w-24 rounded-md border-2 border-black  bg-[#9D9D9D] px-4 py-2.5 shadow-[2px_2px_0px_0px_#000]"
      />

      <div className="my-5 flex flex-col gap-2.5 px-10 pt-20">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, optio
          quibusdam quos hic nisi aspernatur nemo recusandae soluta consectetur
          accusantium eius itaque repellendus ipsam eaque odit tempora iure ad
          illo.
        </p>
        <p className="font-semibold">-{personName}</p>
      </div>
    </div>
  );
}

export default Section;
