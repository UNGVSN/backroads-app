import {socialLinks} from "../data";


export const SocialLink = ({parentClass, itemClass}) => {
    return (
        <ul className={parentClass}>
            {socialLinks.map(({id, href, icon, rel, target}) => {
                return (
                    <li key={id}>
                        <a href={href} className={itemClass} target={target} rel={rel}
                        ><i className={icon}></i
                        ></a>
                    </li>
                );
            })}
        </ul>
    );
}
