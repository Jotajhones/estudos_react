import style from "./Container.module.css";

export function Container({ children }) {
   return( <section className={style.Container}>
        {children}
    </section>
   );
}