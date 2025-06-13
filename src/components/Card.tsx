import { GiOnTarget } from "react-icons/gi";
import { RxValue } from "react-icons/rx";
import { TbDeviceVisionProFilled } from "react-icons/tb";

function Card() {
  const items = [
    {
      title: "Our Mission",
      description:
        "To empower tech talent to address pressing global challenges through the power of technology.",
      icon: GiOnTarget,
    },
    {
      title: "Our Vision",
      description:
        "Our vision is a future where tech professionals, armed with cutting-edge skills, tackle global challenges head-on, enabling businesses and organizations to thrive, innovation to drive progress, startups to receive vital support, and a collaborative tech community to foster growth.",
      icon: TbDeviceVisionProFilled,
    },
    {
      title: "Our Values",
      description:
        "Our core values emphasize convenience, collaboration, and global community benefits, positioning us as a one-stop tech solution while actively contributing to sustainability goals and a more resilient world.",
      icon: RxValue,
    },
  ];

  return (
    <div className="card-container mt-20 flex gap-10 sm:flex-col">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="card min-w-[30vh] items-start gap-6 border-[1px] border-black/10 px-4 py-4 sm:flex sm:w-[30vw]"
          >
            <div className="flex">
              <item.icon size={24} className="text-primary" />
            </div>
            <div className="leftdata">
              <h1
                key={index}
                className=" mb-2 text-lg whitespace-nowrap"
              >
                {item.title}
              </h1>
              <p className="text-[0.9rem] text-black/70">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
