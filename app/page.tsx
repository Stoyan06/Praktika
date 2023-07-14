/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">Renault Scenic</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/scenic01.jpg" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Въведение</h2>
          <p>
            Renault Scenic е автомобил тип миниван. Разполага с 4 пасажерски места + 1 шофьорско.
            Надеждният 1.9 литров дизелов двигател осигурява безпроблемно и бързо придвижване както
            на кратки, така и на дълги разстояния.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Допълнителна информация</h2>
          <p>
            Миниванът е с предно задвижване, двигателят разполага с мощност от 130 к.с.,
            налице са електронно безключово запалване, криматроник, централно заключване
            и парктроник в зависимост от конфигурацията.
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/scenic02.jpg" alt="image02" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Модели и конфигурации</h2>
        <p>
          Renault започва да произвежда Scenic от 90-те години на миналия век.
          Моделът от 1996 се различава значително от тези от 2004, 2006 и 2013 година.
          Произвеждат се автомобили както с дизелови, така и с бензинови двигатели.
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Галерия</h2>
        <div className="gallery">
          <img className="gallery-image" src="/scenic01.jpg" alt="image01" />
          <img className="gallery-image" src="/scenic02.jpg" alt="image01" />
          <img className="gallery-image" src="/scenic03.jpg" alt="image01" />
          <img className="gallery-image" src="/scenic04.jpg" alt="image01" />
          <img className="gallery-image" src="/scenic05.jpg" alt="image01" />
          
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Доволни клиенти</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Даниел</h3>
            <p>
              Бързина, надеждност и комфорт на добра цена.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Теодора</h3>
            <p>
              Идеалният автомобил за майка с 2 деца.
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Христомир</h3>
            <p>
              Минава БМВ-та, бате!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatar.png" alt="avatar" />
            <h3 className="card-name">Лора</h3>
            <p>
              Хвърля сажди, уплаши комшията.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
