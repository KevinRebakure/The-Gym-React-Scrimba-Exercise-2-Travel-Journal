export default function Card(props) {
    return (
      <>
        <div className="flex gap-x-[19px] px-[44px]">
          <img
            src={props.image}
            alt=""
            className="h-[168px] w-[125px] rounded-[5px] object-cover"
          />
          <section>
            <div className="flex gap-x-[12px]">
              <img src="./Fill 219.svg" alt="" />
              <p>{props.country}</p>
              <a href="" className="text-[#918E9B] underline">
                View on Google Maps
              </a>
            </div>

            <h1 className="text-[25px] font-bold">{props.place}</h1>
            <p className="font-bold">{props.date}</p>
            <p>{props.description}</p>
          </section>
        </div>
        <hr />
      </>
    );
}