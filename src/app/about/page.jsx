import Image from "next/image";

const About = () => {
  return (
    <div className="flex flex-col max-w-[1240px] mx-auto py-[16px] px-[15px]">
      <Image
        className="h-auto object-contain rounded-md"
        src="/about3.jpeg"
        width={1920}
        height={1920}
        alt="pic"
      />
      <div className="flex justify-between mt-[40px]">
        <div className="flex-1">
          <h1 className="font-bold text-[30px] text-[#0284c7]">
            Отдел Веб Разработок
          </h1>
          <div className=" text-[20px] mr-[15px]">
            Отдел веб-разработок реализует проекты, которые помогают клиентам
            продавать их товары или услуги, работать над укреплением бренда
            компании, сокращать время на консультации клиентов и упрощать
            коммуникации с ними. <br /> Это становится возможным благодаря
            разработке сайтов на готовых решениях и индивидуальной разработке
            сайтов, их продвижению в рекламной сети Яндекс и Google,
            своевременному сопровождению и обновлению, интеграции сайтов с
            другими системами, такими как 1С, CRM Битрикс24, R-KEEPER, и
            разработке мобильных приложений.
          </div>
        </div>
        <div className=" flex-1 ">
          <h2 className="font-bold text-[30px] text-[#0284c7]">
            Какие работы выполняет ОВР
          </h2>
          <div>
            <ul className="list-disc pl-6 text-[20px]">
              <li className="mb-2">
                Разрабатывает сайты на основе готовых решений других
                разработчиков, например на основе этих решений
                <a className="text-orange-500 font-bold hover:underline" href="https://siter.kz/sozdanie-sajtov/gotovye-resheniya/">
                  {" "}
                  https://siter.kz/sozdanie-sajtov/gotovye-resheniya/{" "}
                </a>
              </li>
              <li className="mb-2">
                Разрабатывает индивидуальные сайты любой сложности, от
                Landing-page до порталов и досок объявлений на CMS 1C-Битрикс
              </li>
              <li className="mb-2">
                Разрабатывает интерактивные прототипы и пишет технические
                задания
              </li>
              <li className="mb-2">
                Интегрирует сайты с 1С, CRM Битрикс24 и с другими системами по
                запросу
              </li>
              <li className="mb-2">
                Дорабатывает сайты, разработанные на CMS 1C-Битрикс
              </li>
              <li className="mb-2">
                Разрабатывает мобильные приложения для сайтов, работающих на CMS
                1C-Битрикс
              </li>
              <li className="mb-2">
                Запускает и анализирует контекстную рекламу
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
