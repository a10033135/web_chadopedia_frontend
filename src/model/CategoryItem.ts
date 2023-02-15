export class CategoryItem {

    id: string = ''

    title: string = ''
    desc: string = ''

    image_url: string = ''

    has_image: boolean = false

    constructor(id: string, title: string, desc: string, image_url: string, has_image: boolean) {
        this.id = id
        this.title = title;
        this.desc = desc;
        this.image_url = image_url;
        this.has_image = has_image;
    }

    static newInstance(): CategoryItem {
        return new CategoryItem('', '', '', '', false)
    }
}