import React from 'react';

function AboutProject() {
  return(
    <section className="project">
      <h2 className="project__title">О проекте</h2>
      <ul className="project__list">
        <li>
          <p className="project__list-subtitle">Дипломный проект включал 5 этапов</p>
          <p className="project__list-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li>
          <p className="project__list-subtitle">На выполнение диплома ушло 5 недель</p>
          <p className="project__list-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="project__duration">
        <div className="project__duration-timeWeek">
          <div className="project__duration-time">1 неделя</div>
          <div className="project__duration-block">back-end</div>
        </div>
        <div className="project__duration-timeWeek">
          <div className="project__duration-time">4 недели</div>
          <div className="project__duration-block">fron-end</div>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;