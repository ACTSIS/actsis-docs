"use strict";(self.webpackChunk_actsis_docs=self.webpackChunk_actsis_docs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"monitoreo-sitios-oci","metadata":{"permalink":"/blog/monitoreo-sitios-oci","source":"@site/blog/2023-08-08-monitoreo-sitios-oci.md","title":"Monitoreo sitios OCI","description":"Monitoreo sitios OCI y pruebas de rendimiento con Grafana y JMeter","date":"2023-08-01T00:00:00.000Z","formattedDate":"August 1, 2023","tags":[{"label":"actsis","permalink":"/blog/tags/actsis"},{"label":"grafana","permalink":"/blog/tags/grafana"},{"label":"service","permalink":"/blog/tags/service"},{"label":"jmeter","permalink":"/blog/tags/jmeter"}],"readingTime":3.995,"hasTruncateMarker":true,"authors":[{"name":"Daniel Rond\xf3n","title":"DevOps Engineer","url":"https://github.com/DanielRondonGarcia","imageURL":"https://avatars.githubusercontent.com/u/61068392?v=4","key":"rondon"}],"frontMatter":{"title":"Monitoreo sitios OCI","description":"Monitoreo sitios OCI y pruebas de rendimiento con Grafana y JMeter","slug":"monitoreo-sitios-oci","authors":"rondon","date":"2023-08-01T00:00:00.000Z","tags":["actsis","grafana","service","jmeter"],"hide_table_of_contents":false}},"content":"Eightshift DevKit offers some blocks with query logic out of the box, but what is the best approach when you need to add a custom query to a block you\u2019ve been working on?\\n\x3c!--truncate--\x3e\\n\\n## Usage in built-in blocks\\n\\nOne of the Eightshift blocks that already uses `WP_Query` is the ***Featured Content*** block. In that block, you can see the query logic is inside the block. However, there is a much better way to do it. The reason it was done like this was to simplify this block and to have an already functioning block available with one WP-CLI command.\\n\\nA much better approach would be to separate the query logic from the block. Other than following the MVC architecture more closely, this will also make the query logic more reusable. To do this, we\u2019re gonna create a service class.\\n\\n## What are Service classes?\\n\\n*Put simply, a Service is any PHP object that performs some sort of \\"global\\" task. - Symfony docs*\\n\\nIf you take a look at the `ServiceInterface` interface, you\u2019ll notice it only contains the `register()` method. This method holds action and filter hooks for that class. Other than hooking into existing actions and filters, this method can be used to register our own filters which can be used in blocks or other classes.\\n\\nBasically, whenever you need to hook into actions or filters, you should use a Service class for that.\\n\\n## Creating a new service class\\n\\nCreating a new service class in your project is as simple as using the following WP-CLI command:\\n\\n```bash\\nwp boilerplate create service-example --folder=CustomQuery --file_name=CustomQuery\\n```\\n\\nOnce this new class is generated, you can add a new public method that will contain the query logic. We want our method to accept three optional arguments:\\n\\n- ID of the category\\n- number of posts per page\\n- number of the current page\\n\\nHaving the category ID optional will allow for one more use case, and that is fetching the latest posts regardless of category. By default, WordPress sorts the posts by publish date, from newest to oldest.\\n\\n```php\\n/**\\n * Get posts by category ID.\\n *\\n * @param int $categoryId Category ID.\\n * @param int $postsPerPage Number of posts per page.\\n * @param int $currentPage Current page number.\\n *\\n * @return WP_Query Query object.\\n */\\npublic function getPostsByCategory($categoryId = null, $postsPerPage = 3, $currentPage = 1): WP_Query\\n{\\n\\t$postArgs = [\\n\\t\\t\'post_type\' => \'post\',\\n\\t\\t\'cat\' => $categoryId,\\n\\t\\t\'posts_per_page\' => $postsPerPage,\\n\\t\\t\'paged\' => $currentPage,\\n\\t];\\n\\n\\treturn new WP_Query($postArgs);\\n}\\n```\\n\\nTo use this method, we can add it as a filter. The filter name should be added as a constant for easier maintenance. Inside the `register()` method, add the following:\\n\\n```php\\n\\\\add_filter(self::GET_POSTS_BY_CATEGORY, [$this, \'getPostsByCategory\'], 10, 3);\\n```\\n\\n## Using the new filter\\n\\n:::note\\nEven if you register a filter for a method that doesn\u2019t accept any arguments, when calling `apply_filters`, you must pass at least 1 parameter. In those cases, simply add `null` as a parameter.\\n:::\\n\\nHere are some examples how you can use the filter:\\n\\n```php\\n// Get 3 latest posts, regardless of category.\\n$allLatestPosts = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, null);\\n\\n// Get 10 latest posts from the News category. News category ID is 2.\\n$latestNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10);\\n\\n// Get another page of News category.\\n$pagedNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10, $currentPage);\\n```\\n\\nThe above example shows multiple use cases. The first two examples could be used in a simple block that displays only the selected number of the latest posts. The last example may be used in a REST route for a load more functionality or in a block with classic pagination.\\n\\nNow you can do a regular query loop in your block to display the posts:\\n\\n```php\\nif ($latestNews->have_posts()) {\\n\\twhile ($latestNews->have_posts()) {\\n\\t\\t$latestNews->the_post();\\n\\t\\t// render the card here with the Components::render helper.\\n\\t}\\n}\\nwp_reset_postdata();\\n```\\n\\n:::caution Important\\nDon\'t forget to add `wp_reset_postdata()` after looping through the custom query!\\n:::\\n\\n## Prepare only the data you need\\n\\nIf you would like to improve this even further, you can run the `have_posts()` loop inside the class and save only the data you need to render to an array. This makes the logic even more separated from the view and all you have to do in a block is loop through the array and populate the component attributes with the values from the array.\\n\\n```php\\n$postData = [];\\n\\nif ($queryData->have_posts()) {\\n\\twhile($queryData->have_posts()) {\\n\\t\\t$queryData->the_post();\\n\\n\\t\\t$postData[] = [\\n\\t\\t\\t\'id\' => get_the_ID(),\\n\\t\\t\\t\'title\' => get_the_title(),\\n\\t\\t\\t\'url\' => get_permalink(),\\n\\t\\t\\t\'image\' => get_the_post_thumbnail_url(),\\n\\t\\t\\t\'date\' => get_the_time(\'d.m.Y.\'),\\n\\t\\t\\t\'excerpt\' => get_the_excerpt(),\\n\\t\\t];\\n\\t}\\n}\\n\\nwp_reset_postdata();\\n\\nreturn $postData;\\n```\\n\\n## Best practices for queries\\n\\nIt\u2019s important to have query optimisation in mind. Some queries may be a lot slower and you have to see if there is any way to follow the [best practices for database queries](https://infinum.com/handbook/wordpress/coding-standards/php-coding-standards/database-queries)."}]}')}}]);